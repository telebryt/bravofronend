import connectDB from "../../../middleware/mongodb";
import Post from "../../../models/Post";
import User from "../../../models/User";
// const multer = require("multer");
import upload from "../../../middleware/upload";

const handler = async (req, res) => {
  // console.log(req.file.filename);

  if (req.method == "POST") {
    // if (req.file) {
    //   console.log(req.file.filename);
    // }
    try {
      const { name, description, price, category, recommended, username } =
        req.body;
      const verifyUser = await User.findOne({ username });
      if (verifyUser.role === 0) {
        res.status(404).send("You are not a stuff");
      } else if (verifyUser.role === 1) {
        if (
          (name && description && price && category && recommended, username)
        ) {
          const newPost = await Post({
            name,
            description,
            price,
            category,
            recommended,
            username,
          });
          upload.single("image");
          newPost.picture = req.file.filename;
          const savedPost = await newPost.save();
          res.status(200).json(savedPost);
        } else {
          res.status(422).send("Please all the fields are required");
        }
      }
    } catch (error) {
      res.status(500).send("Server error " + error.message);
    }
  } else if (req.method === "PUT") {
    try {
      const verifyUser = await User.findOne({ username: req.body.username });
      if (!verifyUser.role === 1) {
        res.status(404).send("You are not a stuff");
      }
      const existingPost = await Post.find({ username: req.body.username });
      !existingPost && res.status(200).send("You can only update your post");
      const updatePost = await Post.findByIdAndUpdate(
        req.body.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(500).send("server error " + err.message);
    }
  } else if (req.method === "DELETE") {
    try {
      const verifyUser = await User.findOne({ username: req.body.username });
      if (!verifyUser.role === 1) {
        res.status(404).send("You are not a stuff");
      }
      const verifyPost = await Post.findById(req.body.id);
      !verifyPost && res.status(400).send("Post does not exit");
      await verifyPost.delete();
      res.status(200).send("Post deleted succesfully");
    } catch (err) {
      res.status(500).send("server error " + err.message);
    }
  } else {
    res.status(422).send("wrong request method");
  }
};
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default connectDB(handler);

import User from "../../../models/User";
import connectDB from "../../../middleware/mongodb";
import bcrypt from "bcrypt";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { username, email,password} = req.body;

    const hashpassword = await bcrypt.hash(password,10);
    if (req.body) {
      try {
        const user = new User({
          username,
          email,
          password:hashpassword,
        });
        const savedUser = await user.save();
        return res.status(200).send(savedUser);
      } catch (err) {
        return res.status(500).send(err.message);
      }
    } else {
      res.status(422).send("incomplete data");
    }
  } else {
    res.status(422).send("Request method not supported");
  }
};

export default connectDB(handler);

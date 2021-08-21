import connectDB from "../../../middleware/mongodb";
import bcrypt from "bcrypt";
import User from "../../../models/User";

const login = async (req, res) => {
  if (req.method === "POST") {
    try {
      const verifyUser = await User.findOne({ name: req.body.name });
      !verifyUser && res.status(404).send("Invalid Credentials");
      const validate = await bcrypt.compare(
        req.body.password,
        verifyUser.password
      );
      !validate && res.status(404).send("incorrect password");
      const { password, ...others } = verifyUser._doc;
      res.status(200).send(others);
    } catch (err) {
      res.status(500).send("Server error" + err.message);
    }
  } else {
    res.status(422).send("wrong request header");
  }
};
export default connectDB(login);

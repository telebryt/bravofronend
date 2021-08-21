import connectDB from "../../../middleware/mongodb";
import User from "../../../models/User";
import bcrypt from "bcrypt"
const Updateuser=async (req,res)=> {
    if(req.method==="PUT"){
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password,10);
        }
        try {
            
            const verify = await User.findById(req.body.id);
            !verify && res.status(400).send("You can only update your details");
            const userUpdate = await User.findByIdAndUpdate(req.body.id,{
                $set:req.body},{new:true})
            
            return res.status(200).send(userUpdate); 
        } catch (err) {
            res.status(500).send("server Error" + err.message)
        }
    }
    else{
        res.status(422).send("Request header not acceptable");
    }
}
   

export default connectDB(Updateuser);

import connectDB from "../../../middleware/mongodb";
import User from "../../../models/User";

const deleteuser = async (req,res)=>{
    if(req.method === "DELETE"){
        try {
            const verifyUser = await User.findById(req.body.id);
            !verifyUser && res.status(400).send("You can only delete you own account");
            await verifyUser.delete();
            res.status(200).send("User Deleted Successfully")
            
        } catch (err) {
            res.status(500).send("Server Error" + err.message);
        }
    }else{
        res.status(422).send("wrong request headers");
    }
}
export default connectDB(deleteuser);
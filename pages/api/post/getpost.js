import connectDb from "../../../middleware/mongodb";
import Post from "../../../models/Post";

const handle = async(req,res)=>{
    if(req.method === "GET"){
        const cat = req.body.cat;
        const recom = req.body.recommend;
        const id = req.body.id;
        let post;
        try {
            if(cat){
                 post  = await Post.find({category:cat});
                !post && res.status(400).send("post with this category does not exit");
                
            }
            if(recom){
                post  = await Post.find({recommendation:recom});
                !post && res.status(400).send("post with this recommendation does not exit");
                
            }
            if(id){
                post  = await Post.findById(id);
                !post && res.status(400).send("post with this ID does not exit");
                
            }
            else{
                post = await Post.find();
            }
             res.status(200).json(post)
        } catch (err) {
            res.status(500).send("server error " + err.message);
        }


    }else{
        res.status(422).send("wrong request headers")
    }
    }

    export default connectDb(handle);
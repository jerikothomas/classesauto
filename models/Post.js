const konek=require('mongoose');


const PostS=new konek.Schema({
    title:String,
    description:String,
    content:String
});

const Post=konek.model('Post',PostS);

module.exports=Post;
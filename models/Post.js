const konek=require('mongoose');


const PostS=new konek.Schema({
    nama:String,
    email:String,
    pesan:String
});

const Post=konek.model('Post',PostS);

module.exports=Post;
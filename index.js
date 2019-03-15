const path= require('path');
const expressEdge =require('express-edge');
const express= require('express');
const konekmongo= require('mongoose');
const bodypass= require('body-parser');
const Kirim=require('./models/Post');
const aplikasi=new express();

konekmongo.connect('mongodb://localhost:27017/classesauto')
    .then(()=>'Konek')
    .catch(err=>console.error('Ada Kesalaahan'));
aplikasi.use(express.static('public'));
aplikasi.use(expressEdge);
aplikasi.set('views',__dirname+'/views');
aplikasi.use(bodypass.json());
aplikasi.use(bodypass.urlencoded({
    extended:true
}));
aplikasi.get('/',async(req,res)=>{
    const pos=await Kirim.find({})
    res.render('index',{
        pos
    });
});
aplikasi.get('/saran',(req,res)=>{
    res.render('create');
});

aplikasi.post('/saran',(req,res)=>{
    Kirim.create(req.body,(error,post)=>{
        res.redirect('/')
    })
});

aplikasi.listen(
    4000,()=>{
        console.log('App running on 127.0.0.1:4000');
    }
);

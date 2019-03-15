const path= require('path');
const expressEdge =require('express-edge');
const express= require('express');
const konekmongo= require('mongoose');
const aplikasi=new express();

konekmongo.connect('mongodb://localhost:27017/classesauto')
    .then(()=>'Konek')
    .catch(err=>console.error('Ada Kesalaahan'));
aplikasi.use(express.static('public'));
aplikasi.use(expressEdge);
aplikasi.set('views',__dirname+'/views');

aplikasi.get('/',(req,res)=>{
    res.render('index');
});

aplikasi.listen(
    4000,()=>{
        console.log('App running on 127.0.0.1:4000');
    }
);
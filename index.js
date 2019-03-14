const path=require('path');
const express= require('express');
const aplikasi=new express();

aplikasi.use(express.static('public'));

aplikasi.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
});

aplikasi.listen(
    4000,()=>{
        console.log('App running on 127.0.0.1:4000');
    }
);
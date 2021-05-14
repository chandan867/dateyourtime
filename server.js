// import express from 'express'
// import mongoose from 'mongoose'
const express=require('express');
const mongoose=require('mongoose');
const Cards=require('./dbCards.js');
const Cors=require('cors');




// app configuration
 const app=express();
 app.use(Cors());
 const port=process.env.PORT || 8001
 const connection_url='mongodb+srv://admin_chandan:IZBGZ3AONFj29jOr@cluster0.usdvl.mongodb.net/tinderdb?retryWrites=true&w=majority'


// middleware
app.use(express.json())
//1.53.33
//db configuration
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(console.log("connected"));

//api endpoints
app.get('/',(req,res)=>res.status(200).send("ram"));
app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    
    Cards.create(dbCard,(err,data)=>{
        if(err)
        res.status(500).send(err);
        else
        res.status(201).send(data);
    })

});
app.get('/tinder/cards',(req,res)=>{
  
    Cards.find((err,data)=>{
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(data);

})
})

//listener

app.listen(port,()=>console.log(`listening on localhost:${port}`));

//1.56
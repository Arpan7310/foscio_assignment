const express=require('express')
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
const path=require('path');
const db =require('./db')
const collection='todo';
var cors = require('cors')


app.use(cors())

db.connect((err)=>{
    if(err){
    console.log(err);
    process.exit(1);
    }
    else {
        app.listen(4000,()=>{
            console.log('connected to databse')
        });
    }
})

app.get ('/getData',async (req,res)=>{
    try{
   const y=await  db.getDB().collection(collection).find({}).toArray()
   res.send(y)
    }
    catch(err)
    {
        console.log(err)
    }
    })

    app.post('/submitData',async (req,res)=>{
        const y=req.body
        try{
            const z= await db.getDB().collection(collection).insertOne(y)
            res.send(z)
        }
        catch(err){
            console.log(err)
        }
    })

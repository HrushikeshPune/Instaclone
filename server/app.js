const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require('cors')
const Data = require('./model/userdetails')
const methodOverride = require('method-override')
require('dotenv').config()

const app = express()
app.use(methodOverride())
app.use(cors())
const MONGO_URI = 'mongodb+srv://borderfree:border123@cluster0.euqjo.mongodb.net/border?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGO_URI || MONGO_URI,{
    useNewUrlParser:true
})
    .then(()=>{console.log("Connected to database")}).catch((err)=>{
    console.log("Error")
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/postdetail",  async(req, res) => {
    try {
        console.log(req.body)
        var date = new Date().toLocaleDateString()
        var postdata=await Data.create({
            img: req.body.img,
            author:req.body.author,
            location:req.body.location,
            description:req.body.description,
            date:date,
            likes: Math.floor(Math.random()*1000)
        })
        console.log(postdata)
        return res.status(200).json({
            status:"Success"
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: "Failed"
        })
    }
})

app.get('/data',async(req,res)=>{
    const posts = await Data.find({})
    console.log(posts)
    res.status(200).json({
        posts
    }) 
})
const port = process.env.PORT || 5000
app.listen(port,()=>console.log("Server is listening on 5000"))
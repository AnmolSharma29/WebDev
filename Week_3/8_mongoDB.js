const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");

app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.5cp2m.mongodb.net/userappnew")

//define schema 
const User = mongoose.model('Users',{ name: String, email: String, password: String}) 

app.post('/signup',async function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // const userExists = await user.findOne({email:email})

    //CRUD => create, read, update, delete
    // if(userExists){
    //     res.status(400).send({message: "User already exists"})
    // }

    const user = new User({
      name: username,
      email: email,
      password: password
    });
    
    user.save();

    res.status(201).send({
        message: "User created successfully"
    });
})

app.listen(3000);
const express = require("express");
const app = express();

app.use(express.json());

app.post('/',function(req,res){
    const kidneys = req.body.kidneys;

    const kidneyLength = kidneys.length();
    res.send("Your kidney length is:" + kidneyLength);
})

app.use(function(err,req,res,next){
    res.json({
        msg:"Input sahi daal bsdk."
    })
})

app.listen(3000);
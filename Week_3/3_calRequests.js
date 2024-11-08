const { log } = require("console");
const express = require("express");

const app = express();

let numberOfRequests = 0;

function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get('/', calculateRequests, function(req,res){
    res.json('Hi');
});

app.listen(3000);
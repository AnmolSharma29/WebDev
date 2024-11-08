const app = express();

function userMiddleware(req,res,move){
    if(username != "anmol" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect inputs.",
        });
    }else{
        next();
    }
}

function kidnetMiddleware(req,res,move){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect inputs.",
        });
    }else{
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidnetMiddleware, function(req,res){
    res.send("Your heart is healthy");
})

app.get("/kidney-checkup", userMiddleware, kidnetMiddleware, function(req,res){
    res.send("Your heart is healthy");
})

app.get("/heart-checkup", userMiddleware, function(req,res){
    res.send("Your heart is healthy");
})

app.listen(3000);
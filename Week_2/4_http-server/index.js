const express = require("express");
const app = express();
var users = [{
    name:"John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.use(express.json());

//Getting the data
app.get("/", function(req, res){
    // Logic when get info from server
    const johnKidneys = users[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;
    let numOfUnhealthyKidneys = 0;
    for (let i = 0; i < numOfKidneys; i++) {
        if(users[0].kidneys[i].healthy == true){
            numOfHealthyKidneys = numOfHealthyKidneys + 1;
        }else{
            numOfUnhealthyKidneys = numOfUnhealthyKidneys + 1;
        }   
    }
    res.json({
        johnKidneys,
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

//Adding healthy or unhealthy kidneys
app.post("/", (req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    })
    res.json({
        msg: "Done!!"
    })
})

//updating all the unhealthy kidneys to healthy kidneys
app.put("/", (req,res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

//removing all the unhealthy kidneys
app.delete("/", (req,res) => {
    //If there is no unhealthy kidney, return 411 
    if(isThereAtleaseOneUnhealthyKidney()){
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"Done!"})
    }else{
        res.status(411).json({
            msg: "You have no bad kidneys!"
        });
    }

})

function isThereAtleaseOneUnhealthyKidney(){
    let atleaseOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atleaseOneUnhealthyKidney = true;
        }
    }
    return atleaseOneUnhealthyKidney;
}

app.listen(3000);
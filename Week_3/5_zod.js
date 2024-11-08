const express = require("express");
const zod = require("zod");
const app = express();

// const schema = zod.array(zod.number());


//
// {
//    email: string => email
//    password: atleast 8 letters
//    country: "IN", "US"
// }

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json());

app.post('/',function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    if(response.success){
        res.send(
            response
        )
    }else{
        res.status(411).json({
            msg: "Input is invaild"
        });
    }

})

app.listen(3000);
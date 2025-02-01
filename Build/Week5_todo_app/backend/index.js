const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({ 
            message: "You have sent wrong inputs",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    
    res.json({
        msg: "Todo created successfully",
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find();

    res.json({
        todos,
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updatePayload.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({ 
            message: "You have sent wrong inputs",
        });
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo completed successfully",
    })
})

app.listen(3000);
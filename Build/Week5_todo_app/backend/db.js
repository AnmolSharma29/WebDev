const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.5cp2m.mongodb.net/todo_app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
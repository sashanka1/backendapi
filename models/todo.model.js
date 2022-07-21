const mongoose = require("mongoose");
const todoSchime = mongoose.Schema({
    todo:{type:String},
    status:{type:String },
    id:{type:String}
})

module.exports = mongoose.model("todolist", todoSchime)
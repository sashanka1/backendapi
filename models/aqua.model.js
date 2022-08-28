const mongoose = require("mongoose");

const aquaProductScheme = mongoose.Schema(
    {
        "name" :{type:String},
        "image" :{type:String},
        "price":{type:Number},
        "catagory":{type:String}
    }
)


module.exports = mongoose.model("aquap", aquaProductScheme)
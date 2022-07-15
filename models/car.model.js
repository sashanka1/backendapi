const mongoose = require("mongoose");

const carScheme = mongoose.Schema(
    {
        "name" :{type:String},
        "color":{type:String}
    }
)


module.exports = mongoose.model("cars", carScheme)
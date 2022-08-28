const mongoose = require("mongoose");

const aquaCartScheme = mongoose.Schema(
    {
        "main_id":{type:String, require:true},
        "name" :{type:String, require:true},
        "image" :{type:String, require:true},
        "price":{type:Number, require:true},
        "catagory":{type:String,require:true},
        "userId": {type:String,require:true}
          
    }
)


module.exports = mongoose.model("aquapcart",aquaCartScheme)
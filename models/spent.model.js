const mongoose = require("mongoose");

const spentScheme = mongoose.Schema(
    {
        // "name" :{type:String},
        // "color":{type:String}
       Spent_heading :{type:String},
       Spent_date : {type:Date},
       Spent_amount : {type:Number},
       Total_amount : {type:Number},
       Spent_catagory : {type:String},
       Spent_description : {type:String},
       Payed_by : {type:String}
    }
)


module.exports = mongoose.model("spents",spentScheme)
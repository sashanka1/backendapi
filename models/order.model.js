const mongoose = require ("mongoose");
const OrderSchima = mongoose.Schema({
    "theUserId":{type:"String",require:true},
    "date":{type:"String",require:true},
    "address":{
        name:{type:"String",require:true},
        state:{type:"String",require:true},
        dist:{type:"String",require:true},
        areaPin:{type:"String",require:true},
        landmark:{type:"String",require:true},
        mobileNo:{type:"String",require:true},
    },
    "orderArr":[
           
        {
            "catagory":{type:"String",require:true},
            "productImage":{type:"String",require:true},
            "productName":{type:"String",require:true},
            "productPrice":{type:"String",require:true},
            
        }
    ]
})

const Order = mongoose.model("order",OrderSchima);


module.exports=Order;


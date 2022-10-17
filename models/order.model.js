const mongoose = require ("mongoose");
const OrderSchima = mongoose.Schema({
    "theUserId":{type:"String",require:true},
    "adddresses":{
        name:{type:"String",require:true},
        state:{type:"String",require:true},
        dist:{type:"String",require:true},
        areaPin:{type:"String",require:true},
        landmark:{type:"String",require:true},
        mobileNO:{type:"String",require:true},
    },
    "orderedData":{type:"String",require:true},
    "orderArr":[
           
        {
            "catagory":{type:"String",require:true},
            "productIMage":{type:"String",require:true},
            "ProductName":{type:"String",require:true},
            "productPrice":{type:"String",require:true},
            
        }
    ]
})

const Order = mongoose.model("order",OrderSchima);


module.exports=Order;


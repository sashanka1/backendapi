const express = require("express");

const Order = require("../models/order.model");


const router = express.Router();


router.post("/",async(req,res)=>{
    

    try {
        const orderCreate = await Order.create(req.body)

        res.status(201).send(orderCreate);
    } catch (error) {
         res.status(500).send({message:error.message})
    }
})

router.get("/",async(req,res)=>{
   
    try {
        let theid = req.query.theuserid;
    const allOrdersOfTheUser = await Order.find({uderId:theid})
    res.status(200).send(allOrdersOfTheUser) 
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})
module.exports = router;
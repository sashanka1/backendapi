const express = require("express");
const carModel = require("../models/car.model");
var Cardata = require("../models/car.model")

const  router = express .Router();

// router.get("/", async(req,res)=>{
//     let allp = await carModel.find({});
//     let totalPage = Math.ceil(allp.length/10)
//     res.send(allp)
// })

router.get("/", async(req,res)=>{
    try {
            let totalproduct = await Cardata.find({})
        var productPerPage = req.query.pq || 10
        var pageNo = req.query .pagn||1
        let skip = (pageNo-1)*productPerPage;
        let totalPage = Math.ceil(totalproduct.length/productPerPage)
        var allcar = await Cardata.find({}).skip(skip).limit(productPerPage);
        res.status(200).send([allcar,totalPage]);
    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }
});

router.post("/", async(req,res)=>{
    const x = await Cardata.create(req.body)
    res.send (x);
})

module.exports =router;
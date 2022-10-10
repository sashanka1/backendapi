const express = require ("express");

const Aqua = require("../models/aqua.model")

const router = express.Router();



router.post("/", async(req,res)=>{ // add to the data base
    try {
        const addthe_aqua = await Aqua.create(req.body) ;
        res.status(200).send(addthe_aqua)
    } catch (error) {
        res.status(500).send(error)
    }
  
})




router.get("/",async(req,res)=>{  // get all data
    try {
        
        var productName = req.query.pName || "no"
        if( productName !== "no"){
           const theproduct = await Aqua.find({name:productName});
           res.status(200).send(theproduct)
        }
        else{
            var aquap=[];
            var product_catagory = req.query.pr_ca || "al"
            if(product_catagory == "fish"){
                 aquap= await Aqua.find({catagory:"fish"});
            }
            else if(product_catagory == "plant"){
                aquap= await Aqua.find({catagory:"plant"});
           }
           else if(product_catagory == "aquarium"){
            aquap= await Aqua.find({catagory:"aquarium"});
           }
          else if(product_catagory == "accessories"){
            aquap= await Aqua.find({catagory:"accessories"});
           }
            else{
                aquap= await Aqua.find({});
            }

            res.status(200).send(aquap);
        }
       
       
        
    
    } catch (error) {
        res.status(500).send(error);
    }
  
})


module.exports=router
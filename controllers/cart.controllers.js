const express = require ("express");

const Cart = require("../models/aquacart.model")

const router = express.Router();



router.post("/", async(req,res)=>{ // add to the data base
    try {
        const addthe_cart = await Cart.create(req.body) ;
        res.status(200).send(addthe_cart)
    } catch (error) {
        res.status(500).send(error)
    }
  
})


router.delete("/:id", async(req, res)=>{ // delete from  the database
    try {
        const dedata_ofcart= await Cart.findByIdAndDelete(req.params.id).lean().exec();
        res.send(dedata_ofcart)
    } catch (error) {
        res.status(500).send(error)
    }
  
})

router.get("/",async(req,res)=>{  // get all data which releted to that particular user

    try {
        let theuserid = req.query.theuser || "not"
        if(theuserid !=="not"){

            let allcartproduct = await Cart.find({userId:theuserid});
            res.send(allcartproduct);
        }
      
    } catch (error) {
        res.status(500).send(error);
    }
  
})



module.exports=router
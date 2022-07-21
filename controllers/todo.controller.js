const express = require ("express");

const Todo = require("../models/todo.model")

const router = express.Router();



router.post("/", async(req,res)=>{ // add to the data base
    try {
        const addthe_todo = await Todo.create(req.body) ;
        res.status(200).send(addthe_todo)
    } catch (error) {
        res.status(500).send(error)
    }
  
})


router.delete("/:id", async(req, res)=>{ // delete from  the database
    try {
        const dedata= await Todo.findByIdAndDelete(req.params.id).lean().exec();
        res.send(dedata)
    } catch (error) {
        res.status(500).send(error)
    }
  
})

router.get("/",async(req,res)=>{  // get all data
    try {
        let datat = await Todo.find({});
        res.send(datat);
    } catch (error) {
        res.status(500).send(error);
    }
  
})

router.patch("/:id", async(req,res)=>{  // find by id and update
    try {
        const updata = await Todo.findByIdAndUpdate(req.params.id, req.body , {
            new:true
        }).lean().exec()
        res.status(200).send(updata)
    } catch (error) {
        
    }
})

module.exports=router
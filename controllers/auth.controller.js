
const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({user}, process.env.SECRET_KEY)
}
const register = async (req, res) => {
    try{
        let user = await User.findOne({email : req.body.email})
   

        //checking email
        if(user){
            return res.status(400).send({message : "Email already exists" })
        }

        // if new user, create it or allow to register;
        user = await User.create(req.body);

        // const token = generateToken(user)
        return res.status(200).send(user);
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

const UpdateAddress = async(req,res)=>{
    try {
       let theid = req.query.userId
            var user = await User.updateOne( { _id:theid },{$push:{adresses:req.body}})
             //var user = await User.find(req.params.id)
            // console.log(req.body)
            res.status(201).send(user)
            
        
    } catch (error) {
        res.status(400).send({message : error.message})
    }
}
const deleteaddress = async(req,res)=>{ // delete an address
    // db.profiles.updateOne( { _id: 1 }, { $pull: { votes: { $gte: 6 } } } ) pull method to remove from an array;
    

    try {
        let userid = req.query.idofuser;
    let removeAddressId = req.query.addressId;

     await User.updateOne({_id:userid},{$pull:{adresses:{_id:removeAddressId}}} )
    res.status(200).send({message:"remove done"})
    } catch (error) {
        res.status(400).send({message : error.message})
    }
}

const userdata = async(req,res)=>{
    
    try {
        let user = await User.find({ _id:req.params.id});
        // console.log(req.params.id)
        res.status(200).send(user); 
    } catch (error) {
        res.status(400).send({message : error.message})
    }
}


const login = async (req, res) => {
    try{
        
        const user = await User.findOne({email : req.body.email})
        //checked if mail exists
        console.log(user,"the user")
        if(!user){
            return res.status(400).send("Wrong Email or Password1")
        }

        //if email exists, check password;
        const match = user.checkPassword(req.body.password)

        // if it doesn't match
        if(!match){
            return res.status(400).send({message : "Wrong Email or Password2"})
        }

        // if it matches
        const token = generateToken(user) // generating token by calling generateToken function
        console.log(user._id,"the user id")
         await User.updateOne( { _id:user._id },{$push:{tokens:{val:token}}})
  

    res.cookie("jwt_cookie", token, {
        expire:new Date(Date.now()+3000000),
        httpsOnly:true,
        
    });
        // console.log(cookie)
        return res.status(200).send({user, token});


    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

module.exports = {register,login,UpdateAddress,userdata,deleteaddress}


const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    const { username, email, password, adresses } = req.body;

    let userData = {
      username,
      email,
      password,
      adresses,
    };

    let user = await User.findOne({ email: req.body.email });

    //checking email
    if (user) {
      return res.status(400).json({
        status: 400,
        message: "Account Already Exist Please Login",
      });
    }
      else{
 // if new user, create it or allow to register;
 const daveData = await User.create(userData);
 console.log(daveData,"the saved data")
 res.status(200).json({
   status: 200,
   message: "SignUp successful",
 });
      }
   
  } catch (err) {
    res.status(400).json({
      ststus: 400,
      message: err
    });
  }
};

const UpdateAddress = async (req, res) => {
  try {
    let theid = req.query.userId;
    var user = await User.updateOne(
      { _id: theid },
      { $push: { adresses: req.body } }
    );
    //var user = await User.find(req.params.id)
    // console.log(req.body)
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const deleteaddress = async (req, res) => {
  // delete an address
  // db.profiles.updateOne( { _id: 1 }, { $pull: { votes: { $gte: 6 } } } ) pull method to remove from an array;

  try {
    let userid = req.query.idofuser;
    let removeAddressId = req.query.addressId;

    await User.updateOne(
      { _id: userid },
      { $pull: { adresses: { _id: removeAddressId } } }
    );
    res.status(200).send({ message: "remove done" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const userdata = async (req, res) => {
  try {
    let user = await User.find({ _id: req.params.id });
    // console.log(req.params.id)
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
 

    const user = await User.findOne({ email: req.body.email });
    //checked if mail exists
    //console.log(user,"the user")
    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "Wrong Email Or Password",
      });
    } else {
      //if email exists, check password;
      const matchPassword = user.checkPassword(req.body.password);

      // if it doesn't match
      if (!matchPassword) {
        return res.status(400).json({
            status:400,
            message:"Wrong Email Or Password"
        });
      } else {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        res.cookie("JWT", token, {
          expire: new Date(Date.now() + 3000000),
        });
        const UserData = {
          Name: user.username,
          adresses: user.adresses,
          email: user.email,
          _id: user._id,
        };
     

        return res.status(200).json({
          status: 200,
          message: UserData,
        });
      }
    }


  } catch (err) {
    res.status(400).send({status:400, message: err.message });
  }
};

module.exports = { register, login, UpdateAddress, userdata, deleteaddress };

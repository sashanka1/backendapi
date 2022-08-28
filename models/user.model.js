
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
   
    
    "username":{type:String, require:true}, 
    "email": {type:String, require:true},
    "password":{type:String, require:true} ,
   

   "adresses":[
    {
        "name":{type:String, require:true}, 
        "state":{type:String, require:true},
        "dist": {type:String, require:true},
        "areaPin":{type:String, require:true},
        "landmark": {type:String, require:true},
       "mobileNo":{type:String, require:true} ,

    },
]
},{
    timestamps : true,
    versionKey : false,
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema)

module.exports = User;



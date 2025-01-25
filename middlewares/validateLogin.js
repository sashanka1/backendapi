const validator = require("validator")


const validataLogin = (req,res,next)=>{
   const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            status:400,
            message:"invalid data"
        })
    }
    else{
        if(!validator.isEmail(email)){
            return res.status(400).json({
                status:400,
                message:"invalid data"
            })
            
        }
        else if(!validator.isStrongPassword){
            return res.status(400).json({
                status:400,
                message:"invalid data"
            });
        }
        else{
            req.body = {email,password}
        }
    }
    next()
};
module.exports = {validataLogin}
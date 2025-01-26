const validator = require("validator");


const validataSignUp = (req,res,next)=>{
    try {
          if(req.body == {}){ // this check is important as empty 
          //  if we gat no data inside req.body ,
          //  we will get empty array of keys in Object.keys 
          // step so campring with the required feilds will 
          // always give true so it will be a bug
                 return res.status(400).json({
                    status:400,
                    message:"not a valid request - data input found"
                 })
          }
        const requiredFields = ["username","email","password","adresses"];
        // checking the data present or not 
        const data = req.body;
       const isdatapresent=  Object.keys(data).every(key=>requiredFields.includes(key));

        if(!isdatapresent){
            return res.status(400).json({
                status:400,
                message:"invalid data"
            });
        }
        else {
            if(adresses[0] == []){
                return res.status(400).json({
                    status:400,
                    message:"invalid data"
                });
            }
            const adressFields =  ["name","state","dist","areaPin","landmark","mobileNo"];
          const isAllFieldsPresent =   Object.keys(req.body.adresses[0]).every(key=>adressFields.includes(key));
                if(!isAllFieldsPresent){
                    return res.status(400).json({
                        status:400,
                        message:"invalid data"
                    });
                }
                else{
                    const {username,email,password,adresses} = req.body;
                    const {name,state,dist,areaPin,landmark,mobileNo} = adresses[0]
                  const checkNeme = username.length >= 2;
                  const checkEmail = validator.isEmail(email);
                  const isPassword = validator.isStrongPassword(password);
                  const isAdressName = name.length > 1 && name.length < 26;
                  const isState = state.length > 1 && name.length < 16;
                  const isDist = dist.length > 1 && name.length < 26;
                  const isAreaPin = areaPin.length === 6;
                  const isLandMark = landmark.length <51;
                  const isNumber = mobileNo.length === 10;

                  if(!checkNeme || !checkEmail || !isPassword || !isAdressName || !isState || !isDist || !isAreaPin || !isLandMark || !isNumber ){
                    return res.status(400).json({
                        status:400,
                        message:"invalid data"
                    });
                  }
                
                }
                next()
            
        } 
    } catch (error) {
        res.status(400).send(error.message)
    }

};


module.exports = {validataSignUp}
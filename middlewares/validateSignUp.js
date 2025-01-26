const validator = require("validator");


const validataSignUp = (req,res,next)=>{
    try {
        console.log(req.body,"called")
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
                message:"invalid data- not complete data presend"
            });
        }
        else {
            const {adresses} = req.body;
            if(adresses.length === 0 ){
                return res.status(400).json({
                    status:400,
                    message:"invalid data- adress not defind"
                });
            }
            const adressFields =  ["name","state","dist","areaPin","landmark","mobileNo"];
            console.log(adresses,"tha adresses array")
          const isAllFieldsPresent =   Object.keys(req.body.adresses[0]).every(key=>adressFields.includes(key));
                if(!isAllFieldsPresent){
                    return res.status(400).json({
                        status:400,
                        message:"invalid data- complete adresses data not provided "
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
                        message:"invalid data- one of the data field is not satisfaying the conditions of data format"
                    });
                  }
                
                }
                
            
        } 
        console.log("called at end")
        next()
    } catch (error) {
        res.status(400).send(error.message)
    }

};


module.exports = {validataSignUp}
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator")
const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true,minLength:2, },
    email: { type: String, require: true,unique:true,validate(value){
        if(!validator.isEmail(value)){
            throw new Error("not a valid type of email")
        }
    } },
    password: { type: String, require: true,minLength:8,maxLength:8,validate(value){
            if(!validator.isStrongPassword(value)){
                throw new error ("not qualified the check list of password type")
            }
    } },

    adresses: [
      {
        name: { type: String, require: true,minLegth:2, maxLength:25 },
        state: { type: String, require: true,minLegth:2,maxLength:15 },
        dist: { type: String, require: true, minLegth:2,maxLength:25 },
        areaPin: { type: String, require: true ,minLegth:6,maxLength:6 },
        landmark: { type: String, require: true , maxLength:50},
        mobileNo: { type: String, require: true, minLength:10, maxLength:10 },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  // console.log(password, "insidecheck");
  // console.log(bcrypt.compareSync(password, this.password));

  //console.log(this.password, "pass2");
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;

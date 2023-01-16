import Users from '../../Models/Users';
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');



const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await Users.findOne({"email":req.body.email})
    const bytes  = CryptoJS.AES.decrypt(user.password, 'secretkey123');
    let decryptedPass  = bytes.toString(CryptoJS.enc.Utf8);
    if(user){
        if(req.body.email == user.email && req.body.password ==decryptedPass ){
          var token = jwt.sign({email:user.email,password:user.password }, 'jwtsecret',{expiresIn:'2d'});
            res.status(200).json({success:"User Login Successfully",token});
        }
        else{
            res.status(200).json({ error: "Invalid Details" });
        }
    }
    
  } else {
    res.status(400).json({ error: "No User Found" });
  }
};

export default connectDb(handler);
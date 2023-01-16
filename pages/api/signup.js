import Users from '../../Models/Users';
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
  if (req.method == "POST") {
    const {name,email}=req.body
    let u = new Users({name,email,password:CryptoJS.AES.encrypt(req.body.password, 'secretkey123').toString()})
    await u.save()
    res.status(200).json({ success: "successfully added user" });
  } else {
    res.status(400).json({ error: "This Method Is Not Allowed" });
  }
};

export default connectDb(handler);

import { JsonWebToken } from "jsonwebtoken";
import connectDb from "../../middleware/mongoose";
import Users from "../../Models/Users";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let token=req.body.token
    let user=JsonWebToken.veify(token,CryptoJS.AES.encrypt(req.body.password, 'secretkey123').toString())
    // let user=await Users.find({email:req.body.email})
    console.log(user)
    res.status(200).json({ Users:user});
  } else {
    res.status(400).json({ error: "This User Is Not Found" });
  }
};
export default connectDb(handler);
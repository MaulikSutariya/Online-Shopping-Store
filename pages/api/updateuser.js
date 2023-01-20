import { JsonWebToken } from "jsonwebtoken";
import connectDb from "../../middleware/mongoose";
import Users from "../../Models/Users";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let token=req.body.jwt
    let user=JsonWebToken.veify(token,CryptoJS.AES.encrypt(req.body.password, 'secretkey123').toString())
    let dbuser=await Users.find({email:user.email})
    console.log(dbuser)
    res.status(200).json({ Users:dbuser});
  } else {
    res.status(400).json({ error: "This User Is Not Found" });
  }
};
export default connectDb(handler);
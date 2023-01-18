import { JsonWebToken } from "jsonwebtoken";
import connectDb from "../../middleware/mongoose";
import Users from "../../Models/Users";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let token=req.body.jwt
    let users=JsonWebToken.veify(token)
    let user=await Users.find({email:req.body.email})
    res.status(200).json({ Users:Users});
  } else {
    res.status(400).json({ error: "This User Is Not Found" });
  }
};
export default connectDb(handler);
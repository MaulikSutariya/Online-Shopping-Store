import connectDb from "../../middleware/mongoose";
import Product from "../../Models/Product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ success: "successfully Update product" });
  } else {
    res.status(400).json({ error: "This Method Is Not Allowed" });
  }
};

export default connectDb(handler);

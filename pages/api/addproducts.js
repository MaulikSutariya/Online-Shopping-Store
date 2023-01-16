import connectDb from "../../middleware/mongoose";
import Product from "../../Models/Product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for(let i=0;i<req.body.length;i++){
    let p = new Product({
      title: req.body[i].title,
      slug: req.body[i].slug,
      desc: req.body[i].desc,
      img: req.body[i].img,
      category: req.body[i].category,
      Price: req.body[i].Price,
      AvailableQty: req.body[i].AvailableQty,
    });
    await p.save()
    
}
res.status(200).json({ success: "successfully added products" });
  } else {
    res.status(400).json({ error: "This Method Is Not Allowed" });
  }
};

export default connectDb(handler);

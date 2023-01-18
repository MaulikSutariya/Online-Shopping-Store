const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Product from "../../Models/Product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let products=  await Product.find()

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price:'price_1MR7FjSBs013nRIcUhe6b2h9',
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

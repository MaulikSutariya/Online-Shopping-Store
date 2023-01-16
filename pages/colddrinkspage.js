import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../Models/Product";


function ColdDrinksPage({ products }) {

  return (
    <>
      <div>
        <style jsx>
          {`
          .products-content h3{
            margin-top:10px;
          }
            .top-products-item {
              text-align: center;
              margin-bottom: 30px;
            }
            .top-products-item .products-image img {
              -webkit-transition: 0.5s;
              transition: 0.5s;
              max-width: 100%;
              height: auto;
              display: inline-block;
              border-radius: 10px;
            }
            .top-products-item .products-content h3 a {
              color: #111111;
            }
            .top-products-item .products-content .price {
              margin-top: 15px;
              margin-bottom: 15px;
              font-weight: 600;
              color: #f35320;
            }
            .top-products-item .products-content .price .old-price {
              text-decoration: line-through;
              color: #6b6b84;
              font-weight: 500;
            }
            .top-products-item .products-image .sale span {
              display: inline-block;
              padding: 10px 20px;
              background-color: #ffffff;
              color: #111111;
              font-size: 15px;
              font-weight: 500;
              border-radius: 5px;
              -webkit-transition: 0.5s;
              transition: 0.5s;
            }
            .top-products-item {
              text-align: center;
              margin-top: 50px;
            }
            .top-products-item .products-image .sale {
              position: absolute;
              left: 10px;
              top: 10px;
            }
            .top-products-item .products-image {
              overflow: hidden;
              position: relative;
              z-index: -10;
            }
          `}
        </style>
        <br />
        <br />
        <div>
          <section className="top-products-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                {Object.keys(products)?.map((item) => {
                  return (
                    <div key={products[item]._id} className="col-lg-3 col-md-6">
                      <Link passHref={true} href={`/Products/${products[item].slug}`}>  
                                 
                        <div className="top-products-item">
                          <div className="products-image">
                          
                              <img
                                src={process.env.NEXT_PUBLIC_URL + products[item].img}
                                alt="image"
                              />
                         

                            <div className="sale">
                              <span>Sale</span>
                            </div>
                          </div>

                          <div className="products-content">
                            <h3>
                              <a href="shop-details.html">{products[item].title}</a>
                            </h3>
                            <div className="price">
                              <span className="new-price">₹{products[item].Price}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "cold_drink" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default ColdDrinksPage;

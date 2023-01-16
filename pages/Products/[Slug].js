import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import Product from "../../Models/Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({addToCart,products,buyNow}) => {


  const router = useRouter();

  const { Slug } = router.query;

  const [pin,setPin]=useState()
  const [service,setService]=useState()
  const checkServicePincode = async()=>{
      let pins= await fetch( 'http://localhost:3000/api/pincodes')
      let pinJson= await pins.json()
      if(pinJson.includes(parseInt(pin))){
        setService(true)
        toast.success('Your Pincode Is Serviceable!', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }else{
        setService(false)
        toast.error('Sorry Pincode Not Serviceable', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
  }

  const onChangePin =(e)=>{
    setPin(e.target.value)
  }
  

  


  return (
    <>
    <ToastContainer/>
      <style jsx>
        {`
          .product-details-desc h3 {
            margin-bottom: 18px;
            font-size: 25px;
            color: #f35320;
            font-weight: bold;
          }
          .product-details-desc .price {
            margin-bottom: 15px;
            color: #000000;
            font-size: 15px;
            font-weight: 600;
          }
          .product-details-image {
            height: 100%;
            width: 100%;
            text-align: center;
          }
          .product-details-image img {
            height: 500px;
            border-radius: 10px;
          }
          .product-details-desc {
            max-width: 550px;
            text-align: justify;
            padding: 20px 0;
          }
          .itemsquantity h6 {
            color: #f35320;
            font-size:23px;
            margin:0;
          }
         
          .itemsquantity {
            display: flex;
            align-items: baseline;
            background-color:red;
            width: 180px;
            border-radius: 10px;
            height:35px;
            justify-content: space-evenly;
            background-color: #f5f5f5;
          }
          .itemsquantity h4 {
            font-size: 17px;
            margin: 0 20px;
            color: #f35320;
          }
          .checkoutbtn button {
            width: 270px;
            margin-top: 25px;
            height: 45px;
            border: 2px solid white;
            background-color: #f35320;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
          }
          .checkoutbtn h6 {
            color: white;
            font-size: 18px;
            margin: 0;
            font-weight: 400;
          }
          .checkoutbtn{
            display:flex;
            
          }
          .pincode{
            margin-top:25px;
            display:flex;
          }
          .pincode input{
            width:380px;
            height:40px;
            background-color: #f5f5f5;
            border:none;
            outline:none;
            padding:0 15px;
            caret-color: #f35320;
            border-radius:7px;
          }
          .pincode button{
            width: 150px;
            height: 42  px;
            border: 2px solid white;
            background-color: #f35320;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            margin-left:20px;
          }
          .pincode button h6{
            color: white;
            font-size: 18px;
            margin: 0;
            font-weight: 400;
          }
          .pinavaible h6{
            color: red;
            font-size: 16px;
            margin: 0;
            margin-top:10px;
            font-weight: 400;
          }
          .pinnotavaible h6{
            color: green;
            font-size: 16px;
            margin: 0;
            margin-top:10px;
            font-weight: 400;
          }


          //  media cssssss


          @media screen and (max-width: 768px){
            .product-details-image img {
              height:500px;
            }
            .product-details-desc{
              text-align:justify;
              max-width:100%
            }
            .checkoutbtn button{
              width:343px;
            }
            .pincode input{
              width:451px;
            }
            .pincode button{
              width:222px;
            }
        }



          @media screen and (max-width: 425px){
            .product-details-image img {
              height:400px;
            }
            .checkoutbtn button{
              width:270px;
            }
            .pincode input{
              width:380px;
            }
            .pincode button{
              width:150px;
            }
        }



          @media screen and (max-width: 375px){
            .product-details-image img {
              height:350px;
            }
            .checkoutbtn button{
              width:270px;
            }
            .pincode input{
              width:380px;
            }
            .pincode button{
              width:150px;
            }
        }


          @media screen and (max-width: 320px){
            .product-details-image img {
              height:300px;
            }
            .checkoutbtn button{
              width:270px;
            }
            .pincode input{
              width:200px;
            }
            .pincode button{
              width:150px;
            }
        }




        `}
      </style>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="product-details-image">
              <img src={process.env.NEXT_PUBLIC_URL+products.img} />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="product-details-desc">
              <h3>{products.title}</h3>
              <div className="price">
                <span className="new-price">₹ {products.Price}</span>
              </div>

              <p>
                {products.desc}
              </p>
            </div>

            <div className="itemsquantity">
            <h6>-</h6> 
              <h4>1</h4>
              <h6>+</h6>
            </div>

            <div className="checkoutbtn">
              <button onClick={()=>{addToCart(Slug,1,products.price,products.title)}}>
                <h6>Add To Cart</h6>
              </button>&nbsp;&nbsp;
              <button onClick={()=>{buyNow(Slug,1,products.price,products.title)}}>
                <h6>Buy Now</h6>
              </button>
            </div>

            <div className="pincode">
              <input type="text" onChange={onChangePin} placeholder="Enter Your Pincode" />
              <button onClick={checkServicePincode}>
                <h6>Check</h6>
              </button>
            </div> 

           {(!service && service !=null) && <div className="pinavaible">
              <h6>Sorry!! We Do Not Deliver To This Pincode Yet! ❌</h6>
            </div> }
           {(service && service !=null) &&<div className="pinnotavaible">
              <h6>Yeehhh! This Pincode Is Serviceable ✅</h6>
            </div> }
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};



export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.findOne({slug:context.query.Slug});
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Slug;

import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Order from '../Models/Order'

function orders() {
    const router=useRouter()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
          router.push('/')
        }
      },[])
  return (
    <>
      <style jsx>{`
        .orderpage h1 {
          text-align: center;
          font-size: 35px;
          color: #f35320;
          padding-bottom: 15px;
          border-bottom: 2px solid #f35320;
        }
        .orderpage {
          padding: 20px 10px;
        }
      `}</style>
      <div className="container">
        <div className="orderpage">
          <h1>My Orders</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}



export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
    let orders = await Order.find({});
    return {
      props: { orders:orders  },
    };
  }

export default orders;

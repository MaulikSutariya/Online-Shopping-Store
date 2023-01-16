import React from "react";
import styles from "../styles/Orderpage.module.css";

function OrderPage() {
  return (
    <>
      <div className="container">
        <div className={styles.orderpage}>
          <div className={styles.oph1}>
            <h1>YOUR ORDER DETAILS</h1>
          </div>

          <div className={styles.orderdetails}>
            <div className={styles.orderd}>
              <div className={styles.orderbrand}>
                <h5>ORGO.COM</h5>
                <h4>Order Id: #459632</h4>
                <h6>Your Order Has Been Successfully Placed !!</h6>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Item Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1.</th>
                    <td>Orange</td>
                    <td>2</td>
                    <td>₹85</td>
                  </tr>
                  <tr>
                    <th scope="row">2.</th>
                    <td>Orange</td>
                    <td>2</td>
                    <td>₹85</td>
                  </tr>{" "}
                  <tr>
                    <th scope="row">3.</th>
                    <td>Orange</td>
                    <td>2</td>
                    <td>₹85</td>
                  </tr>
                </tbody>
              </table>

              <div className={styles.trackorder}>
                    <h5>Sub Total is : ₹ 1125</h5>
                    <button>Track Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;

import React from "react";
import styles from "../styles/Checkout.module.css";

function Checkout({
  cartItem,
  addToCart,
  removeFromCart,
  subTotal,
}) {
  return (
    <>
      <div className="container">
        <div className={styles.Checkout}>
          <div className={styles.Ch1}>
            <h1>CHECKOUT</h1>
          </div>

          <div className={styles.deliveryh2}>
            <h2>1. Delivery Details</h2>
            <div className={styles.formallinpput}>
              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>Name</h6>
                  <input type="text" placeholder="Enter Your Name Here.." />
                </div>
                <div className={styles.nameelable}>
                  <h6>Email</h6>
                  <input type="email" placeholder="Enter Your Email Here.." />
                </div>
              </div>

              <div className={styles.addressinput}>
                <h6>Address</h6>
                <textarea placeholder="Enter Your Address Here.." />
              </div>

              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>Phone No:</h6>
                  <input type="text" placeholder="Enter Your Phone No Here.." />
                </div>
                <div className={styles.nameelable}>
                  <h6>City</h6>
                  <input
                    type="text"
                    placeholder="Enter Your City Name Here.."
                  />
                </div>
              </div>

              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>State</h6>
                  <input type="text" placeholder="Enter Your State Here.." />
                </div>
                <div className={styles.nameelable}>
                  <h6>Pincode</h6>
                  <input
                    type="number"
                    placeholder="Enter Your PinCode Here.."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.reviewcarth2}>
            <h2>2. Review Cart Items & Pay</h2>

            <div className={styles.checkoutitems}>
              <div>
                {Object.keys(cartItem).length == 0 && (
                  <div className={styles.checkitemsempty}>
                    <h5>😥 YOUR CART IS EMPTY</h5>
                  </div>
                )}
              </div>

              <div className={styles.checkallitems}>
                <ol>
                  {Object.keys(cartItem).map((k,i) => {
                    return (
                      <li key={k._id}>
                        <div  className={styles.checkitems}>
                          <div className={styles.checkitemsname}>
                            <h6>{cartItem[k].name}</h6>
                          </div>
                          <div className={styles.checkitemsquantity}>
                            <svg
                              onClick={() => {
                                removeFromCart(
                                  k,
                                  1,
                                  cartItem[k].price,
                                  cartItem[k].name
                                );
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              fill="currentColor"
                              class="bi bi-dash-square-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </svg>
                            <h4>{cartItem[k].qty}</h4>
                            <svg
                              onClick={() => {
                                addToCart(
                                  k,
                                  1,
                                  cartItem[k].price,
                                  cartItem[k].name
                                );
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              fill="currentColor"
                              class="bi bi-plus-square-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                            </svg>{" "}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                <hr className={styles.checkhr} />
                <div className={styles.sbbtntotal}>
                <div className={styles.subtotal}>
                  <h5>Sub Total : ₹{subTotal}</h5>
                </div>
                <div className={styles.paybutton}>
                  <button>Pay ₹{subTotal}</button>
          </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Checkout;

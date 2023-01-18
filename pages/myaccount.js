import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/myaccount.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSourceMapRange } from "typescript";

function myaccount() {
  const router = useRouter();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [name,setName]=useState()
  const [phoneno,setPhoneno]=useState();
  const [address,setAddress]=useState();
  const [city,setCity]=useState();
  const [state,setState]=useState();
  const [pincode,setPincode]=useState();
  const [password,setPassword]=useState();
  const [cpassword,setCpassword]=useState()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    if (user && user.token) {
      setUser(user);
      setEmail(user.email);
    }
  }, []);
  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className={styles.Checkout}>
          <div className={styles.Ch1}>
            <h1>UPDATE YOUR ACCOUNT DETAILS</h1>
          </div>
          <br />
          <div className={styles.deliveryh2}>
            <h2>1. Personal Details Update</h2>
            <div className={styles.formallinpput}>
              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>Name</h6>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name Here.."
                  />
                </div>
                <div className={styles.nameelable}>
                  <h6>Email</h6>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Here.."
                  />
                </div>
              </div>

              <div className={styles.addressinput}>
                <h6>Address</h6>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Your Address Here.."
                />
              </div>

              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>Phone No:</h6>
                  <input
                    type="text"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                    placeholder="Enter Your Phone No Here.."
                  />
                </div>
                <div className={styles.nameelable}>
                  <h6>City</h6>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="Enter Your City Name Here.."
                  />
                </div>
              </div>

              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>State</h6>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter Your State Here.."
                  />
                </div>
                <div className={styles.nameelable}>
                  <h6>Pincode</h6>
                  <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    type="text"
                    placeholder="Enter Your State Here.."
                  />
                </div>
              </div>

              <div className={styles.paybutton}>
                <button>Update Profile</button>
              </div>

              <br />

              <h2>2. Password Update</h2>
              <br />

              <div className={styles.nameinput}>
                <div className={styles.nameelable}>
                  <h6>Password</h6>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="Password"
                    placeholder="Enter Your Password Here.."
                  />
                </div>
                <div className={styles.nameelable}>
                  <h6>Confirm Password</h6>
                  <input
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    type="Password"
                    placeholder="Enter Your Confirm Password Here.."
                  />
                </div>
              </div>

              <div className={styles.paybutton}>
                <button>Update password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default myaccount;

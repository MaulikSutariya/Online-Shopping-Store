import React from "react";
import styles from "../styles/SigninPage.module.css";
import { useRouter } from "next/router";
import  { useEffect} from "react";

function ForgotpasswordPage() {
  const router=useRouter()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles.signinpage}>
          <h1>Forgot Password ?</h1>
          <div className={styles.signindetails}>
            <div className={styles.signinnameelable}>
              <input type="email" placeholder="Enter Your Email" />
            </div>

            <div className={styles.signinbutton}>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotpasswordPage;

import React, { useEffect, useState } from "react";
import styles from "../styles/SigninPage.module.css";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

function SigninPage() {
  const router=useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = JSON.stringify({
      email: email,
      password: password,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: sendData,
    };
    let res = await fetch( 'http://localhost:3000/api/login', requestOptions)
    let response = await res.json()
    setEmail("");
    setPassword("");
    if(response.success){
      localStorage.setItem("token",response.token)
      toast.success("Your Are Successfully Logged In", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(()=>{
        router.push("http://localhost:3000")
      },1000)
      
    }
    else{
      toast.error(response.error, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

  };

  return (
    <>
      <div className="container">
      <ToastContainer/>
        <div className={styles.signinpage}>
          <h1>Sign In To Your Account</h1>
          <div className={styles.signindetails}>
            <div className={styles.signinnameelable}>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.signinnameelable}>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="/ForgotpasswordPage">
                {" "}
                <p>Forgot Pasword ?</p>
              </Link>
            </div>
            <div className={styles.signinbutton}>
              <button onClick={handleSubmit}>Sign in</button>
              <span>OR</span>
              <Link href="/SignupPage">
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninPage;

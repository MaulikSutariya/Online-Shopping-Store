import React, { useEffect, useState } from "react";
import styles from "../styles/SigninPage.module.css";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter()
 
  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = JSON.stringify({
      name:name,
      email: email,
      password: password,
    });
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: sendData
  };
    let res = await fetch( 'http://localhost:3000/api/signup',requestOptions)
    let response = await res.json();
    setName("");
    setEmail("");
    setPassword("");
    if(response.success){
      toast.success('Your Account has Been Created', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        router.push("/SigninPage")
    }
    else{
      toast.error('Details Not Match', {
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
          <h1>Sign Up To Your Account</h1>
          <div className={styles.signindetails}>
            
              <div className={styles.signinnameelable}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              </div>
            

            <div className={styles.signinbutton}>
              <button onClick={handleSubmit}>Sign Up</button>
              <span>OR</span>
              <Link href="/SigninPage">
                <button>Sign In</button>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;

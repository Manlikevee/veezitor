
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Toaster, toast } from 'sonner'
import mylogo from '../../../../public/InvestmentOneLogo.png'
import axios from 'axios';
import { useRouter } from 'next/navigation'

const register = () => {
  const router = useRouter()
  const url = 'https://veezitorbackend.vercel.app/jobapprregister/';
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  function submitform() {
    setIsloading(true)
    const data = {
      username: firstName,
      email: email,
      password: password
  };
      if (firstName && password && email){
        axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          // Successful registration

          toast.success(`Registration successful`);
          setTimeout(function() {

            router.replace('/auth/login')
          }, 2000);
  

          setIsloading(false)
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          const responseData = error.response.data;
          if (error.response.status === 400) {

            if(responseData.message){
              toast.error(responseData.message || 'Network response was not ok')
            } else {
              // Handle specific error codes with custom messages
              Object.values(responseData).forEach(errorArray => {
                if (Array.isArray(errorArray) && errorArray.length > 0) {
                    errorArray.forEach(errorMessage => {

                        toast.error(errorMessage)
                    });
                }
            });
            }

          } else {
              toast.error(responseData.message || 'Network response was not ok')
          }
      } else if (error.request) {
          // The request was made but no response was received
          toast.error('No response received from server')
      } else {
          // Something happened in setting up the request that triggered an Error
          toast.error(error.message || 'An error occurred')
      }

      // Hide loading spinner and enable submit button
      setIsloading(false)
  });
      }
      else{
          toast.error(`Kindly Fill All Fields`);
          setIsloading(false)
      }
      // setIsloading(false)
  }
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };
 


  return (
<div className="container flex">
  <div className="loginside">
    <div className="logindata">
      <h6>Hi, Welcome Back!</h6>
      {/* <button type="button" onClick={() => router.replace('/dashboard')}>
      Dashboard
    </button> */}
      <div className="subt">
        Streamline your Frontdesk and Keep your Office Safe
      </div>
      {/* <div class="samplebtn">
 <button> <img src="img/Google Icon.png" alt=""> Sign In With Google</button> 
    </div> */}
      <div className="or">
        <div className="orline">
          {" "}
          <div className="lin" />{" "}
        </div>
        {/* <div class="ortext">Or</div> */}
        <div className="orline">
          <div className="lin" />
        </div>
      </div>
      <div className="loginfrm">
        <label htmlFor="">Username</label>
        <div className="inp">
          <span className="material-symbols-outlined">person
</span>
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username"
            value={firstName} onChange={e => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="loginfrm">
        <label htmlFor="">Email Address</label>
        <div className="inp">
          <span className="material-symbols-outlined">mail</span>{" "}
          <input
            type="email"
            id="username"
            placeholder="Enter Your Username/Email"
            value={email} onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>
      <p />
      <div className="loginfrm">
        <label htmlFor="password">Password</label>
        <div className="inp">
          <span className="material-symbols-outlined">lock</span>
          <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        placeholder="••••••••••••••••••••••"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
          <span onClick={togglePasswordVisibility}
            className="eye material-symbols-outlined"
          >
             {passwordVisible ? "visibility_off" : "visibility"}
          </span>
        </div>
      </div>

      <p />
      <div className="loginfrm">
        {isLoading ?        
   <button id="loadingBtn" style={{ display: "flex" }} disabled="">
   <span className='loading-spinner'></span> Loading
    </button>
        :
        <button id="submitBtn" onClick={submitform}>
        Register
      </button> 
         }
 
      
      </div>
      <div className='already'>Already have an account ?       <Link
            href='/auth/login'
          >
       Login
          </Link></div>

    </div>
  </div>
  <div className="imageside reg">
    <div className="log">
      <div
        className="sidebarlogo"
        style={{ margin: 1, justifyContent: "start" }}
      >
         <Image
         width={100}
         height={100}
         src={mylogo} alt="" />
        Veezitors
      </div>
      <p>
        We are pioneers in contactless, cloud-based workspace solutions,
        delivering smart, secure, and modern workplace experiences to companies
        around the world.
      </p>
    </div>
  </div>
</div>
  )
}

export default register
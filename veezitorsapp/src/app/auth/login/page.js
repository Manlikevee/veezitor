
'use client'
import React, { useState , useContext} from 'react'
import { Toaster, toast } from 'sonner'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import Image from 'next/image';
import mylogo from '../../../../public/InvestmentOneLogo.png'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { VeeContext } from '@/context/veecontext';
const page = () => {
  const router = useRouter()
  const url = 'https://veezitorbackend.vercel.app/token/';
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { fetchCompanySetup, } = useContext(VeeContext);

  function submitform() {
    setIsloading(true)
    const data = {
      username: firstName,
      password: password
  };
      if (firstName && password){
        axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          // Successful login
          toast.success(`Login successfully`);
    
          // Save access and refresh tokens to localStorage
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          Cookies.set('access_token', response.data.access, { expires: 14 });
          Cookies.set('refresh_token', response.data.refresh, { expires: 14 });
          const token = response.data.access;
          const arrayToken = token.split('.');
          const tokenPayload = JSON.parse(atob(arrayToken[1]));
          console.log(tokenPayload);
          setIsloading(false);
          fetchCompanySetup();
          let params = new URLSearchParams(window.location.search);
          let nexturl = params.get('next');
          setTimeout(function() {
            if(nexturl){
              window.location.href = nexturl
              router.replace(nexturl)
            }else{
              window.location.href = '/dashboard'
              router.replace('/dashboard')
            }
          
          }, 1500);
  
      })
      .catch(error => {
          // Failed login
          toast.error(error.response ? error.response.data.message || 'Invalid Username or Password' : 'Failed to connect to server');
          setIsloading(false)
        });
        
      }
      else{
          toast.error(`Kindly Fill All Fields`);
          setIsloading(false)
      }
  }
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };
 
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
signinfunction(tokenResponse.access_token)
    },
    onFailure: error => console.error(error),
    // scope: 'profile email',
  });

 async function signinfunction(mytoken){
    try {
      const response = await axios.post('http://localhost:8000/api/auth/google/', {
        token: mytoken,
      });

      // console.localStorage(response.data.user);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      Cookies.set('access_token', response.data.access, { expires: 14 });
      Cookies.set('refresh_token', response.data.refresh, { expires: 14 });
      const token = response.data.access;
      const arrayToken = token.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      console.log(tokenPayload);
      setIsloading(false);
      fetchCompanySetup();
      let params = new URLSearchParams(window.location.search);
      let nexturl = params.get('next');
      setTimeout(function() {
        if(nexturl){
          window.location.href = nexturl
          router.replace(nexturl)
        }else{
          window.location.href = '/dashboard'
          router.replace('/dashboard')
        }
      
      }, 1500);

      // Store the tokens in local storage or state management library
      // localStorage.setItem('access_token', response.data.access);
      // localStorage.setItem('refresh_token', response.data.refresh);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  }
  return (

<div className="container flex">

  <div className="loginside">
    <div className="logindata">
      <h6>Hi, Welcome Back!</h6>
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
        <label htmlFor="">Email Address</label>
        <div className="inp">
          <span className="material-symbols-outlined">mail</span>{" "}
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username/Email"
            value={firstName} onChange={e => setFirstName(e.target.value)}
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
      <div className="rem">
        <div className="rems" />
        <div className="rem">Forgot your password?</div>
      </div>
      <p />
      <div className="loginfrm">
        {isLoading ?        
   <button id="loadingBtn" style={{ display: "flex" }} disabled="">
   <span className='loading-spinner'></span> Loading
    </button>
        :
        <button id="submitBtn" onClick={submitform}>
        Submit
      </button> 
         }
 
      
      </div>
<button onClick={() => login()}>sss</button>
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    // signinfunction(credentialResponse.credential)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>
      <div className='already'>Dont have an account ?       <Link
            href='/auth/register'
          >
       Register
          </Link></div>

    </div>
  </div>
  <div className="imageside ">
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

export default page
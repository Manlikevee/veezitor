"use client"
import React from 'react'
import Sidenav from '../navigations/Sidenav'
import Topnav from '../navigations/Topnav'
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import Cookies from 'js-cookie';
import investorimg from '../../../public/InvestmentOneLogo.png'
import Image from 'next/image';
const Profileupdatelayout = ({children}) => {
    const isAuthenticated = Cookies.get('access_token');
    useLayoutEffect(() => {
      const isAuth = isAuthenticated;
      if(!isAuth){
        redirect("/auth/login")
      }
    }, [])
  return (

<>
<div className="container flex">
  <div className="dataprogressone">
    <div className="sidebarlogo" style={{ margin: 1, justifyContent: "start" }}>
    <Image src={investorimg} alt="" />
    </div>
    <h2>Company Setup</h2>
    <p>
      Take a moment to complete your company profile setup to unlock the full
      range of features and benefits tailored to enhance your experience. Your
      complete profile ensures seamless navigation, personalized
      recommendations, and efficient communication.
    </p>

  </div>
  <div className="dataprogresstwo loginside">

      <div class="sidebarlogo">
      <Image src={investorimg} alt="" />
        ViZitors
      </div>
      <div className="dataprogresscontent">
    {children}
  </div>
  </div>
</div>


</>

  )
}

export default Profileupdatelayout
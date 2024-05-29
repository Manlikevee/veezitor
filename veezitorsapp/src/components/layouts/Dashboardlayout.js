"use client"
import React, { useEffect } from 'react'
import Sidenav from '../navigations/Sidenav'
import Topnav from '../navigations/Topnav'
import { redirect } from 'next/navigation';
import { useLayoutEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import Updateprofilemodal from '../utility/Updateprofilemodal';
import { VeeContext } from '@/context/veecontext';
import Visitationbar from '../navigations/Visitationbar';

const Dashboardlayout = ({children}) => {
  const [showModal, setShowModal] = useState(false);
  const {companySetup, fetchvisitors, logo, acceptvisitor, loadingaccept,    axiosInstance,  loading, error, fetchCompanySetup, visitationdata, sideloading, refreshAccessToken, checkusername, isSidebarOpen, isOverlayOpen, toggleSidebar, setIsOverlayOpen, setIsSidebarOpen, isvisitorbaropen, setisVistorbaropen, togglevisitorbar } = useContext(VeeContext);
  const isAuthenticated = Cookies.get('access_token');
  const [isFullscreen, setIsFullscreen] = useState(false);


  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };



  useLayoutEffect(() => {
    const isAuth = isAuthenticated;

    if(!isAuth){
      redirect("/auth/login")
    } 
    checkusername();  
    fetchCompanySetup();
    setIsOverlayOpen(false)
    setIsSidebarOpen(false)
  
  }, [])
  const datatoken = Cookies.get('userdata_token');

  useEffect(() => {
 
    if (typeof window !== 'undefined' && datatoken) {
      const decodedToken = jwtDecode(datatoken);
      setShowModal(!decodedToken.active);
      // setlogo(decodedToken.data.logo)
      // console.log(decodedToken)
    }
  }, [datatoken]);

  return (
    <>
    

    <div className={`overlay ${isOverlayOpen ? 'overlayshow' : ''}`} onClick={toggleSidebar} />

    <div className={`container myheight ${loading && 'shimmers'}`}>

         <Sidenav  mylogo={logo} />
         <Visitationbar  fetchvisitors={fetchvisitors}  axiosInstance={axiosInstance}  acceptvisitor={acceptvisitor} loadingaccept={loadingaccept}   togglevisitorbar={togglevisitorbar} visitationdata={visitationdata}  sideloading={sideloading} isvisitorbaropen={isvisitorbaropen} setisVistorbaropen={setisVistorbaropen} />
         <div className="mydata">
          
          <Topnav toggle={toggleSidebar} fullscreen={toggleFullscreen} mylogo={logo} />
          <div className="dashboard">

         {children}
         </div>
         </div>

         
         </div>

         {typeof window !== 'undefined' && datatoken && !jwtDecode(datatoken).data?.active || error ? (
        <Updateprofilemodal/>) : null}


         {/* {typeof window !== 'undefined'? (         {
jwtDecode(isAuthenticated)?.profilestatus ? (  ''   ) : ( <Updateprofilemodal/>)
) : ( ) } */}


    </>
  
  )
}

export default Dashboardlayout
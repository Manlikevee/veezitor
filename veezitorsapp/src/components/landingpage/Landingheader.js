import React from 'react'
import mylogo from '../../../public/newicn.png'
import Image from 'next/image'
import Link from 'next/link'

const Landingheader = () => {
  return (
    <div className="landingheader">
    <div className="landingcontainer">
      <div className="headerlogo">
        <Image src={mylogo} width={100} height={100} alt="" />
        VEEZITORS
      </div>
      <div className="links">
        <Link href="/">About Us</Link>
        <Link href="services.html">Services</Link>
        <a href="blog.html">Blog</a>
        <a href="training.html">Training</a>
      </div>
      <Link href="/auth/login" className="getstarted">
        <span className="material-symbols-outlined">lock</span> Get Started{" "}
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Link>
    </div>
  </div>
  
  )
}

export default Landingheader
import React from 'react'
import mylogo from '../../../public/newicn.png'
import Image from 'next/image'
import Link from 'next/link'

const Landingheader = () => {
  return (
    <div className="landingheader">
    <div className="landingcontainer">
      <div className="headerlogo">
        <Image src={mylogo} width={20} height={20} alt="" />
        VEEZITORS
      </div>
      <div className="links">
        <Link href="/">About Us</Link>
        <Link href="/">Services</Link>
        <a href="/">Blog</a>
        <a href="/">Training</a>
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
import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="landingcontainer">
    <div className="landinghero">
      <div className="landingone">
        <div className="landingaccent">
          <img src="Icon (9).png" alt="" /> Powering Tomorrow
        </div>
        <div className="ladingtop">
          Streamline your Frontdesk and Keep your Office Safe
        </div>
        <div className="landingbottom">
          Upgrade your visitor registration process with our Touchless Visitor
          Management System, guaranteeing a contact-free and efficient experience.
          Ditch conventional methods for a seamless, hygienic solution that
          ensures safety for all visitors.
        </div>
        <div className="landingbuttons">
          <a href="" className="solutions">
            Solutions
          </a>
          <Link href="/visitation/newvisitation" className="contact">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="landingtwo">
        <img src="Image (13).png" alt="" />
      </div>
    </div>
  </div>
  
  )
}

export default Hero
'use client'
import React, { useState, useCallback  } from 'react'
import Image from 'next/image';
import BadgeModule from './BadgeModule';
const Features = () => {
  const images = [
    'https://www.vizitorapp.com/images/vizitor/Digital-Document-Signing.svg',
    'https://www.vizitorapp.com/images/vizitor/Badge-printing-for-visitor.svg',
    'https://www.vizitorapp.com/images/vizitor/TouchlessQR1.svg',
    'https://www.vizitorapp.com/images/vizitor/Pre-registration.svg',
    'https://www.vizitorapp.com/images/vizitor/Pre-registration.svg',
    'https://www.vizitorapp.com/images/vizitor/Approve-Disapprove-visitors.svg',
    'https://www.vizitorapp.com/images/vizitor/Send&Recieve-Invites.svg',
    'https://www.vizitorapp.com/images/vizitor/Add-organization.svg',
    'https://www.vizitorapp.com/images/vizitor/Touchless-attendance.svg',
    'https://www.vizitorapp.com/images/vizitor/Touchless-attendance.svg',
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedImagetwo, setSelectedImagetwo] = useState(images[5]);
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setContentHeight(isActive ? '0px' : `${document.querySelector('.badgecontent').scrollHeight}px`);
  };
  const selectImg = useCallback((id) => {
    setSelectedImage(images[id]);
  }, [images]);

  const selectImgtwo = useCallback((id) => {
    setSelectedImagetwo(images[id]);
  }, [images]);
  return (
<div className="differenceflex">
  <div className="landingcontainer">
    <div className="diffflx">
      <div className="difflxone">
        <div className="topbadge">Forvisitors</div>
        <div className="sectxt">Effortless Check-in Solution!</div>
        <div className="contentsflex">
          <div className="contentsflexone">
            
            <span onClick={() => selectImg(0)}>
            <BadgeModule title='Digital Document Signing' body='Enable Host Notification Required within the app settings in
                  the (settings) configuration.' />
            </span>

            <span onClick={() => selectImg(1)}>
            <BadgeModule title='Badge printings' body='easily track and identify visitors with customizable badges that contain important details and a photograph.' />
            </span>

          

            <span onClick={() => selectImg(3)}>
            <BadgeModule title='Touchless/QR' body='Employees and visitors can easily sign in with the Touchless or a QR code so they can sign-in without touch anything' />
            </span>

            <span onClick={() => selectImg(4)}>
            <BadgeModule title='Pre-registration' body='Excellent way to welcome VIP guests and streamline visitor check-in by registering before arrival for great lasting impression. Try for free' />
            </span>
  
            <span onClick={() => selectImg(2)}>
            <BadgeModule title='Realtime Notification' body='Excellent way to welcome VIP guests and streamline visitor check-in by registering before arrival for a great lasting impression. Updates are sent to users in real-time.' />
            </span>
         

          </div>
          <div className="contentflextwo">
            <div className="contentimg">
              <Image
                id="myimg"
                src={selectedImage}
                width='100'
                height='100'
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="difflextwo">
        <div className="topbadge">For Employee</div>
        <div className="sectxt">Perfect Companion for Employees!</div>
        <div className="contentsflex">
          <div className="contentsflexone">

          <span onClick={() => selectImgtwo(5)}>
            <BadgeModule title='Approve/Disapprove visitors' body='Host can Quickly and securely approve/disapprove their
                  visitors at the entrance with a custom message and email.' />
            </span>


            <span onClick={() => selectImgtwo(6)}>
            <BadgeModule title='Send &amp; Check Invites' body='Send invitations with venue and host details, and Visitors would receive a unique passcode with an invitation.' />
            </span>


            <span onClick={() => selectImgtwo(7)}>
            <BadgeModule title='Add organization' body=' Hello to seamless transitions, Effortlessly switch locations and register yourself with convenience of a Vizitor Pass.' />
            </span>


            <span onClick={() => selectImgtwo(8)}>
            <BadgeModule title='Touchless attendance' body='  Experience toucless attendance with Vizitor pass, making check-ins and check-outs a breeze and hello to convenience and
                  safety.' />
            </span>

            <span onClick={() => selectImgtwo(9)}>
            <BadgeModule title='Pre-registration' body='Excellent way to welcome VIP guests and streamline visitor check-in by registering before arrival for great lasting impression. Try for free' />
            </span>


    
    
      
   
          </div>
          <div className="contentflextwo">
            <div className="contentimg">
            <img
                id="myimg"
                src={selectedImagetwo}
                width='100'
                height='100'
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Features
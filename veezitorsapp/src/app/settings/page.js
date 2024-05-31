'use client'
import Dashboardlayout from '@/components/layouts/Dashboardlayout'
import Employeetable from '@/components/tables/Employeetable'
import { VeeContext } from '@/context/veecontext';
import React, { useContext, useState } from 'react'
import NewEmployeeForm from '@/components/utility/NewEmployeeForm';
import vector from '../../../public/Group (4).png'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <Dashboardlayout>


   <div className="settingsbox">
  <div className="settingboxdiv">
    <div className="topsettingdiv">
      <div className="topsettingtitle">Subscription</div>
      <div className="accountflex">
        <div className="accountflexarea1">
          <div className="accountlogo">
            <svg
              width={64}
              height={65}
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_5067_8953)">
                <circle cx="32.05" cy="30.9894" r="25.0158" fill="white" />
              </g>
              <path
                d="M24.6565 35.2148H39.4445L41.557 39.44H22.5439L24.6565 35.2148Z"
                fill="#FF5501"
                stroke="#C6301F"
                strokeWidth="2.11256"
                strokeLinejoin="round"
              />
              <path
                d="M32.0503 24.6519V35.2147M27.8252 39.4398V41.5524V39.4398Z"
                stroke="#C6301F"
                strokeWidth="2.11256"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.3535 20.4268H35.7475V24.6519H28.3535V20.4268Z"
                fill="#FF5501"
                stroke="#C6301F"
                strokeWidth="2.11256"
                strokeLinejoin="round"
              />
              <path
                d="M36.2754 39.4399V41.5525"
                stroke="#C6301F"
                strokeWidth="2.11256"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_5067_8953"
                  x="0.314533"
                  y="0.597915"
                  width="63.4705"
                  height="63.471"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.34393" />
                  <feGaussianBlur stdDeviation="3.35982" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5067_8953"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5067_8953"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="accountsubtype">
            <div className="accountflexlabel">Current Subscription</div>
            <div className="accountsubcontent">Free Trial</div>
          </div>
          <div className="accountprice">
            <div className="accountflexlabel">Price</div>
            <div className="accountpricecontent">No payment Required</div>
          </div>
          <div className="accountexpirydate">
            <div className="accountflexlabel">Expiry date</div>
            <div className="accountexpirycontent">
              Your plan expires on October 20, 2021
            </div>
          </div>
        </div>
        <div className="upgradeplanbtn">
          {" "}
          <a href="" className="mybtn">
            Upgrade plan
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="settingboxdiv">
    <div className="topsettingtitle">Email Address</div>
    <div className="emailcontent">
      Your email address is akinloluwaa@gmail.com <a href="">Change email</a>
    </div>
  </div>
  <div className="settingboxdiv">
    <div className="topsettingtitle">Notifications settings</div>
    <div className="notificationdiv">
      <div className="notflex">
        <div className="chkbx">
          {" "}
          <input type="checkbox" name="" id="" />{" "}
        </div>
        <div className="textbx">
          I would like to sign up to receive job related alerts and
          notifications. If this box is not checked, please note that that you
          will still receive important emails about your onboarding and
          applications
        </div>
      </div>
      <div className="notflex">
        <div className="chkbx">
          {" "}
          <input type="checkbox" name="" id="" />{" "}
        </div>
        <div className="textbx">
          Yes, I would like to share my profile with potential employers
        </div>
      </div>
      <div className="notflex">
        <div className="chkbx">
          {" "}
          <input type="checkbox" name="" id="" />{" "}
        </div>
        <div className="textbx">
          Yes, I would like to share my profile with potential employers
        </div>
      </div>
    </div>
  </div>
  <div className="settingboxdiv">
    <div className="topsettingtitle">Password settings</div>
    <div className="passwordtext">
      Manage access to your account <a href="">Change password</a>
    </div>
  </div>
  <div className="settingboxdiv">
    <div className="topsettingtitle">Deactivate Account</div>
    <div className="deactivatetext">
      Do you want to deactivate your account? By deactivationg your account you
      will loose all the content associated with it
    </div>
    <div className="deactivatetextred">Deactivate my account</div>
  </div>
</div>


        </Dashboardlayout>
  )
}

export default page
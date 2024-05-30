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
   <h1>Account Settings </h1>
   <div class="contents">
            <h3>Subscription</h3>
            <div class="grp">
                <div class="bx">
                  <Image src={vector} alt='vector'/>
                </div>
                <div class="tag">
                    <div class="current">Current Subscription</div>
                    <div class="free">Free Trial</div>
                </div>
                <div class="tag">
                    <div class="curr">Price</div>
                    <div class="fr">Payment Required</div>
                </div>
                <div class="tag">
                    <div class="current">Expiry Date</div>
                    <div class="fr">Your plan expires on October 20, 2021</div>
                </div>
                <div class="upgrade">
                    <button>Upgrade Plan</button>
                </div>
            </div>
           
        </div>

        <div className='contents'>
   <h3>
    Email Address
   </h3>
   <div className='tags'>
    <div>
    Your email address is akinloluwaa@gmail.com
    </div>
    <Link href='' >Change email</Link>
   </div>
        </div>

        <div className='contents'>
          <h3>  Notification Settings</h3>
         <div class="fj">
          <div className='span'>
     <input type='checkbox'></input>
     <span>I would like to sign up to receive job related alerts and notifications. If this box is not checked, please note that that you will still receive important emails about your onboarding and applications.</span>
          </div>
          <div className='span'>
     <input type='checkbox'></input>
     <span>I would like to sign up to receive job related alerts and notifications. If this box is not checked, please note that that you will still receive important emails about your onboarding and applications.</span>
          </div>
          <div className='span'>
     <input type='checkbox'></input>
     <span>I would like to sign up to receive job related alerts and notifications. If this box is not checked, please note that that you will still receive important emails about your onboarding and applications.</span>
          </div>
          </div>
        </div>
        <div className='contents'>
   <h3>
   Password Settings
   </h3>
   <div className='tags'>
    <div>
    Manage access to your account 
    </div>
    <Link href='' >Change password</Link>
   </div>
        </div>
        <div className='contents'>
          <h3>
            Deactivate Account
          </h3>
          <div class="d">Do you want to deactivate your account? By deactivating your account you will loose all the content associated with it</div>
          <Link href=''>Deactivate Account</Link>
        </div>
        </Dashboardlayout>
  )
}

export default page
'use client'
import React, { useRef, useEffect, useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import mylogo from '../../../../../public/newicn.png'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { VeeContext } from '@/context/veecontext';
import { Toaster, toast } from 'sonner'
import axios from 'axios';
import { useRouter } from 'next/navigation'
const DynamicVisitorsform = dynamic(() => import('@/components/utility/Visitorsform'), {
  ssr: false,
});
const page = () => {
  const router = useRouter()
  const { id } = useParams();
  const [number, setNumber] = useState();
  const [isValid, setIsValid] = useState(false);
  const [isloading, setisloading] = useState(false);
  // const [errorCode, setErrorCode] = useState('');
  const [companyref, setCompanyref] = useState(null)
  const [error, setError] = useState(true);
  const [companyData, setCompanyData] = useState(null);
 
  function standardizePhoneNumber(phoneNumber) {
    // Remove any characters that are not digits
    var standardizedNumber = phoneNumber.replace(/\D/g, '');
    return standardizedNumber;
}


const posthData = async () => {
  setisloading(true)
  setError('')

  const url = `https://veezitorbackend.vercel.app/phonesearch?company_id=${companyref}&phone_number=${standardizePhoneNumber(number)}`
  try {
    const response = await axios.get(url);
    console.log('responseeeezzzzz', response)

    if (response) {
      const confirms = confirm(
        `Kindly confirm that your visitation request is for ${response?.data?.first_name}  ${response?.data?.last_name}`
      );
      if (confirms) {
        toast.success('Successfully Fetched')
        router.push(`/visitation/visitation/${response?.data?.staff_id}?company_id=${companyref}&phone_number=${response?.data?.phone_number}`)
      } else {
        toast.info('😮😮 OOPS, Lets try that again')
      }
      setisloading(false)

  }} catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range

      toast.error(error.response.data.error)
      setisloading(false)
    
    } else if (error.request) {
      // Request was made but no response received


      toast.error('No response received from the server.')
      setisloading(false)
    } else {
      // Something else happened in setting up the request

     
      toast.error('error.message')
      setisloading(false)
    }
  }
};


  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://veezitorbackend.vercel.app/SearchCompany?company_id=${id}`);
          setCompanyData(response.data);
          setCompanyref(response.data.ref)
          console.log('responseeee', response)
          setError(false)
        } catch (error) {
          if (error.response) {
            // Server responded with a status other than 200 range
            setError(error.response.data.error);
            toast.error(error.response.data.error)
          
          } else if (error.request) {
            // Request was made but no response received
            setError('No response received from the server.');
   
            toast.error('No response received from the server.')
          } else {
            // Something else happened in setting up the request
            setError(error.message||'No response received from the server.' );
           
            toast.error('error.message')
          }
        }
      };

      fetchData();
    }
  }, [id]);



  return (
    
<div className="vizreq">
  <div className="visitorsform">
    <div className="sectiontitle col">
      <div className="sidebarlogo">
      <Image
         width={100}
         height={100}
         src={mylogo} alt="" />
          {companyData?.organization_name || 'Vizitors'}
      </div>
      <small> To log your appointment, please provide the following:</small>
    </div>
    <div className="loginfrm">
      <label htmlFor="phone">Staff's Phone Number</label>
      <div className="inp">
        {/* <span class="material-symbols-outlined">phone</span> */}
        {!error && <DynamicVisitorsform number={number} setNumber={setNumber}  isValid={isValid} setIsValid={setIsValid} />
     }
    
      </div>
    </div>
    <div className="loginfrm hiddeninput" id="hiddeninput">
      <label htmlFor="fullname">Staff's full name </label>
      <div className="inp">
        <span className="material-symbols-outlined">person</span>
        <input type="text" id="fullname" name="fullname" readOnly="" />

      </div>
    </div>
    <div className="rem">
      <div className="rems" />
      <div className="rem">Why Phone Number ?</div>
    </div>
    <div className="loginfrm">
      {
        error || isloading ? (      <button id="loadingBtn" style={{ display: "flex", 'font-size': '13px' }} disabled="">
        {error}  <span className='loading-spinner'></span>
         </button>)  :   (   <button id="submitBtn" onClick={posthData}>
        Proceed
      </button> ) }
   
   
    </div>
    <br />
    <div
      className="rem"
      style={{
        textAlign: "center",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
        <div>
              {/* <p>Phone Number: {number}</p>
      <p>Is Valid: {isValid.toString()}</p>
      <p>Error Code: {errorCode}</p> */}
      Powered By VeeTech
      </div>
    </div>
  </div>
</div>


  )
}

export default page
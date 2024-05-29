'use client'
import mylogo from '../../../../../public/newicn.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner'
import axios from 'axios';
import { useParams } from 'next/navigation';
const page = () => {
  const router = useRouter()
  const { id } = useParams();
  const [visitationdata, setVisitationdata] = useState([]);

  function toTitleCase(str) {
    if(str){
      return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
else{
  return 
}
}

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const companyId = params.get('company_id');
    const number =  params.get('phone_number');



    if (id) {
        const fetchData = async () => {
          try {
            const payload = {
              post_id: id,
  
            };
  
            // Define endpoint
            const endpoint = 'https://veezitorbackend.vercel.app/getvisitordetails';
            const response = await axios.post(endpoint, payload);
                      // Define the payload

            if(response.status == 200){
              console.log('responseeee', response)
              setVisitationdata(response.data?.visitorsdata)
              toast.success('Visitation details Fetched Successfully')
            }

          } catch (error) {
            if (error.response) {
              // Server responded with a status other than 200 range
    
              toast.error(error.response.data.error)
            
            } else if (error.request) {
              // Request was made but no response received
          
     
              toast.error('No response received from the server.')
            } else {
              // Something else happened in setting up the request
   
             
              toast.error(error.message||'No response received from the server.')
            }
          }
        };
  
        fetchData();
      }
  }, [id]);
  return (
<div className="vizreq earth">
  <div className="idcard">
    <div className="sectiontitle col">
      <div className="sidebarlogo">
        
        {/* <img src="icon-white-deskotp_1__2_-removebg-preview.png" alt=""> */}
        <Image
         width={100}
         height={100}
         src={mylogo} alt="" /> Vizitors Tag
      </div>
      {/*         
             <small> To log your appointment, please provide the following:</small> */}
    </div>
    <div className="vizitordetails">
      <div className="vizitorprofilephoto">
     
        <Image
         width={120}
         height={120}
         src='/man.png' alt="" />
      </div>

      <div className="pdetails">
        <h4> NAME:</h4>
        <p id="personname"> 
        {visitationdata?.first_name && visitationdata?.last_name 
    ? visitationdata.first_name + ' ' + visitationdata.last_name 
    : 'loading'}  </p>
      </div>
      <div className="vizitordetailsbubble">
        <div className="vflex">
          <div className="vtitle">Status</div>
          <div className="vnotitle" id="visitstatus">
               {toTitleCase(visitationdata?.status)}
          </div>
        </div>
        <div className="vflex">
          <div className="vtitle">Host</div>
          <div className="vnotitle" id="host">
          {visitationdata?.staff_id?.first_name && visitationdata?.staff_id?.last_name 
    ? visitationdata.staff_id.first_name + ' ' + visitationdata.staff_id.last_name 
    : 'loading'}
          </div>
        </div>
      </div>

      <div className="foot">
        <div
          className="rem"
          style={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 12
          }}
        >
          Powered By Veetech
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page
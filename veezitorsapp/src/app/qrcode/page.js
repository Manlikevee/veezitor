'use client'
import Dashboardcard from '@/components/cards/Dashboardcard';
import Dashboardlayout, { SidebarContext } from '@/components/layouts/Dashboardlayout';
import { UserData } from '../../context/Veezitorcontext';
import React, { useContext, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { VeeContext } from '@/context/veecontext';
// import Qrcard from '@/components/qrcodecard/Qrcard';
import dynamic from 'next/dynamic';
import NewQrcode from '@/components/utility/NewQrcode';


const DynamicQrcard = dynamic(() => import('@/components/qrcodecard/Qrcard'), {
  ssr: false,
});

const DynamicQrCodeScanner  = dynamic(() => import('@/components/utility/Logoutqr'), {
  ssr: false,
});

const page = () => {
    const { isOpen, test, setTest, username, myqrcode , fetchqrcode, axiosInstance,  loadingmyqrcode } = useContext(VeeContext);
    const [showForm, setShowForm] = useState(false);
    const [showQrscanner, setshowQrscanner ] = useState(false);



    // const showErrorToast = () => {
    //   toast.error('This is an error message', {
    //     duration: 70000, // Duration in milliseconds (7 seconds)
    //   });
    // };


const handleQrscanner   = () => {
  setshowQrscanner(prevshowQrs => !prevshowQrs);
  console.log('clicked')
};

    const toggleFormVisibility = () => {
      setShowForm(prevShowForm => !prevShowForm);

    };
    console.log(myqrcode);
  return (
    <Dashboardlayout>
  {showQrscanner && <DynamicQrCodeScanner handleQrscanner={handleQrscanner} />}  

{showForm && <NewQrcode toggle={toggleFormVisibility} axiosInstance={axiosInstance} fetchQrcode={fetchqrcode}  />}
    <div className="sectionheader">
      <div className="sectiontitle">QRCODETAGS</div>
      <div className="sectionbtn">
        <div className="sectionbtn">
          <div className="exportbtn" onClick={handleQrscanner}>
            <span className="material-symbols-outlined" >system_update_alt</span>
         Logout Tag
          </div>
          <div className="exportbtn newvisitor" onClick={toggleFormVisibility}>
            <span className="material-symbols-outlined">system_update_alt</span>
            Generate New Tag
          </div>
        </div>
        <div className="newvisitor" />
      </div>
    </div>
    <div className="sectionbody">
      <div className="sectiontags">
        <div className="tagone tag active" data-target="allEmployeesContent">
          All Tags
        </div>
        <div className="tagtwo tag" data-target="teamsContent">
          In Use Only
        </div>
        <div className="tagthree tag" data-target="rolesContent">
          Available Only
        </div>
      </div>
    </div>
    <div id="allEmployeesContent" className="content active">
      <div className="tagsgrids" id="tagsgrid">
        { loadingmyqrcode  ?     (
            

            // <Qrcard  dataArray={myqrcode} />
            myqrcode.map((dataItem, index) => (
<DynamicQrcard  data={dataItem} key={index} />
              ))
            

            ) 
            
            : 
            
            
            'loadingggggg'  }
    {/* <Qrcard  dataArray={dataArray}/> */}
      </div>
    </div>
    <div id="teamsContent" className="content">
      Content for 'Teams'
    </div>
    <div id="rolesContent" className="content">
      Content for 'Roles'
    </div>
 


    </Dashboardlayout>
  )
}

export default page
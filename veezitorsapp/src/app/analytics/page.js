'use client'
import Dashboardlayout from '@/components/layouts/Dashboardlayout'
import Employeetable from '@/components/tables/Employeetable'
import { VeeContext } from '@/context/veecontext';
import React, { useRef, useContext, useState } from 'react'
import NewEmployeeForm from '@/components/utility/NewEmployeeForm';
import vector from '../../../public/Group (4).png'
import Image from 'next/image';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Dashboardcard from '@/components/cards/Dashboardcard';
import { useScreenshot, createFileName } from "use-react-screenshot";

const page = () => {
    //  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     const { monthlyvisitors, loadingmonthlyvisitors } = useContext(VeeContext);
  
    // Dummy data for visitors per month
    const visitorCounts = monthlyvisitors;

    const data = {
        // labels: months,
        datasets: [
            {
                label: 'Visitors',
                data: visitorCounts,
                backgroundColor: '#ffe4c4',
                borderColor: '#ffe4c4',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const ref = useRef(null)
    const [image, takeScreenShot] = useScreenshot({
      type: "image/jpeg",
      quality: 1.0
    });
  
    const download =  (image, { name = "img", extension = "jpg" } = {}) => {
      const a = document.createElement("a");
      a.href = image;
      a.download = createFileName(extension, name);
      a.click();
    };
  
    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <Dashboardlayout>
 <img width='120' src={image} alt={'Screenshot'} />
<div className="dashs">
        <Dashboardcard
          iconname={"barcode_reader"}
          text={"Pending Approval"}
          value={"0"}
        />
        <Dashboardcard
          iconname={"pending_actions"}
          text={"Awaiting Confirmation"}
          value={"0"}
        />
        <Dashboardcard
          iconname={"calendar_month"}
          text={"Reshedules"}
          value={"0"}
        />
      </div>
      <button style={{ marginBottom: '10px' }} onClick={downloadScreenshot}>
          Take screenshot
        </button>
{!loadingmonthlyvisitors ? (
<div className='mybar' ref={ref} >
<Bar data={data} options={options} />
</div>

) : ('Loading.....') }



        </Dashboardlayout>
  )
}

export default page
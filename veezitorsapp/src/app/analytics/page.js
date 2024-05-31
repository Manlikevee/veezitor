'use client'
import Dashboardlayout from '@/components/layouts/Dashboardlayout'
import Employeetable from '@/components/tables/Employeetable'
import { VeeContext } from '@/context/veecontext';
import React, { useContext, useState } from 'react'
import NewEmployeeForm from '@/components/utility/NewEmployeeForm';
import vector from '../../../public/Group (4).png'
import Image from 'next/image';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Dashboardcard from '@/components/cards/Dashboardcard';


const page = () => {
     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Dummy data for visitors per month
    const visitorCounts = [12, 19, 3, 5, 2, 3, 30, 45, 22, 17, 29, 10];

    const data = {
        labels: months,
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
  return (
    <Dashboardlayout>

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

<div className='mybar'>
<Bar data={data} options={options} />
</div>


        </Dashboardlayout>
  )
}

export default page
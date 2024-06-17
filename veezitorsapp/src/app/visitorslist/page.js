'use client'
import Dashboardlayout from '@/components/layouts/Dashboardlayout'
import Visitorslist from '@/components/tables/Visitorslist'
import { VeeContext } from '@/context/veecontext';
import React, { useContext, useState } from 'react'
import NewEmployeeForm from '@/components/utility/NewEmployeeForm';

const page = () => {
  const [showForm, setShowForm] = useState(false);
  const { isOpen, test, setTest, username, myqrcode , loadingmyqrcode, employee, employeedataloaded, axiosInstance, fetchEmployeeData, Uniquevisitors,  } = useContext(VeeContext);
  
  const toggleFormVisibility = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  return (
    <Dashboardlayout>

<>
{}
 {showForm && <NewEmployeeForm toggle={toggleFormVisibility} axiosInstance={axiosInstance} fetchEmployeeData={fetchEmployeeData}  />}
  <div className="sectionheader">
    <div className="sectiontitle col">
      <div>Visitor's List </div>
      {/* <small>Here is what we have for you today </small> */}
    </div>
    <div className="sectionbtn">
      <div className="sectionbtn">
        <div className="exportbtn">
          <span className="material-symbols-outlined">system_update_alt</span>{" "}
          Export
        </div>
        <div className="exportbtn newvisitor" onClick={toggleFormVisibility}>
          <span className="material-symbols-outlined">system_update_alt</span>{" "}
          New Employee
        </div>
      </div>
      <div className="newvisitor" />
    </div>
  </div>
  <div className="dashs">
    <div className="dashcard">
      <div className="dashicon">
        <span className="material-symbols-outlined">Group</span>
      </div>
      <div className="dashtexts">
        
        <div className="dashvalue" id="employeecount">
        {employee?.length || 0}
        </div>
        <div className="dashnumber">Employee's</div>
      </div>
    </div>
  </div>
  <div className="mytable">
    <div className="ttable visit mdt">
      <div className="tablerow">
        {/* <div class="acc initials"></div> */}
        <div className="acc">Name</div>
        <div className="acc ">Email</div>
        <div className="acc initialize">ref </div>
        <div className="acc initialize">Phone Number</div>
        <div className="acc initialize">Gender</div>
      </div>
      <div id="employeeLists" className="employeeList">
   
   

      {employeedataloaded ? <Visitorslist mydata={Uniquevisitors} /> : 'loadingggggggggg'}


      </div>
    </div>
  </div>
</>



    </Dashboardlayout>
  )
}

export default page
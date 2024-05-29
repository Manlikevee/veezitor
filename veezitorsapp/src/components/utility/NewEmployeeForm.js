import React, { useState, useContext } from 'react';
import { Toaster, toast } from 'sonner'
import dynamic from 'next/dynamic';
const DynamicVisitorsform = dynamic(() => import('./Visitorsform'), {
  ssr: false,
});
const NewEmployeeForm = ({toggle, axiosInstance, fetchEmployeeData}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [isLoading, setIsloading] = useState(false);
  const [isValid, setIsValid] = useState(false);


  const postData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    middle_name: middleName,
    phone_number: phoneNumber,
    gender: gender,
  };


  const handleSubmit = () => {
    setIsloading(true)
    // Perform submission logic here

    axiosInstance.post('/employee', postData)
    .then(response => {
      console.log('Response:', response.data);

      fetchEmployeeData();
      toggle();
      toast.success(`Successful`);
      setIsloading(false)
    })
    .catch(error => {
      console.error('There was an error!', error);

      setIsloading(false)
    });
  };

  return (
    <div className="loading-over2" style={{ display: "flex" }}>
      <div className="floatingform">
        <div className="sectiontitle col">
          <div className="jc">
            New Employee{" "}
            <span id="closex" onClick={() => toggle()}>
            <span class="material-symbols-outlined">
close
</span>
            </span>
          </div>
          {/* {phoneNumber} {isValid ? 'valid' : 'invalid'}  */}
          <small> Fill The Below Details To Register An Employee     </small>
        </div>
        <div className="loginside mylss mylside">
          <div className="loginfrm">
            <label htmlFor="firstname">First Name</label>
            <div className="inp">
              <span className="material-symbols-outlined">person</span>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="loginfrm">
            <label htmlFor="lastname">Last Name</label>
            <div className="inp">
              <span className="material-symbols-outlined">person</span>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="loginfrm">
            <label htmlFor="phonenumber">Phone number</label>
            <div className="inp">
              {/* <span className="material-symbols-outlined">phone</span> */}
              {/* <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              /> */}
              <DynamicVisitorsform number={phoneNumber} setNumber={setPhoneNumber}  isValid={isValid} setIsValid={setIsValid} />
            </div>
          </div>

          <div className="loginfrm">
            <label htmlFor="email">Email address</label>
            <div className="inp">
              <span className="material-symbols-outlined">mail</span>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="loginfrm">
            <label htmlFor="middlename">Middle Name</label>
            <div className="inp">
              <span className="material-symbols-outlined">person</span>
              <input
                type="text"
                id="middlename"
                name="middlename"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
          </div>

   

          <div className="loginfrm">
            <label htmlFor="gender">Gender</label>
            <div className="inp">
              <span className="material-symbols-outlined">person</span>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >

           
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="loginfrm">

          {isLoading ?        
   <button id="loadingBtn" style={{ display: "flex" }} disabled="">
   <span className='loading-spinner'></span> Loading
    </button>
        :
        <button id="submitBtn" onClick={handleSubmit}>
        Submit
      </button> 
         }
        </div>
      </div>
    </div>
  );
};

export default NewEmployeeForm;

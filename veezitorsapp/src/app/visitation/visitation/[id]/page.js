'use client'
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner'
import axios from 'axios';
import { useParams } from 'next/navigation';
import mylogo from '../../../../../public/newicn.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [visitorType, setVisitorType] = useState('Vendor');
    const [whoToSee, setWhoToSee] = useState('');
    const [companyref, setCompanyref] = useState(null)
    const [companyData, setCompanyData] = useState(null);
    const [purpose, setPurpose] = useState('');
    const [note, setNote] = useState('');
    const [staffId, setStaffId] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Add your submission logic here
        console.log('Form submitted:', formData);
      };

      const formData = {
        email: email,
        phonenumber: phone,
        first_name: firstName,
        last_name: lastName,
        visitation_type: visitorType,
        staff_id: companyData?.staff_id,
        reason: purpose,
        company_ref: companyref,
      };


      const posthData = async () => {
        setIsLoading(true);
        setError('');
        try {
          const response = await axios.post('https://veezitorbackend.vercel.app/visitor', formData);
          console.log(response.data);
          toast.success('successfully posted')
          router.replace(`/visitation/visitationrequest/${response?.data?.ref}`)
          // Handle the successful response here (e.g., show a success message or redirect)
        } catch (error) {
          if (error.response) {
            // Server responded with a status other than 200 range
      
            toast.error(error.response.data.error || 'An Error Occured')
    
          
          } else if (error.request) {
            // Request was made but no response received
      
      
            toast.error('No response received from the server.')
      
          } else {
            // Something else happened in setting up the request
      
           
            toast.error('error.message')
     
          }
        } finally {
          setIsLoading(false);
        }
      };
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const companyId = params.get('company_id');
        const number =  params.get('phone_number');
        setCompanyref(companyId)
       
        if (id) {
            const fetchData = async () => {
              try {
                const response = await axios.get(`https://veezitorbackend.vercel.app/phonesearch?company_id=${companyId}&phone_number=${number}`);
                
                console.log('responseeee', response)
                toast.success('successsssssss')
                setCompanyData(response.data);
                setWhoToSee(response.data.first_name + ' ' +  response.data.last_name)
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
        <div className="container flex">
          <div className="loginside nopadd">
            <div className="logindata">
              <br />
              <h6>Visitation Form</h6>
              <div className="subt">
                Fill the details below to complete Your Visitation appointment
              </div>
              <div className="myform">
                <div className="loginside mylside gd">
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
                    <label htmlFor="phone">Phone number</label>
                    <div className="inp">
                      <span className="material-symbols-outlined">phone</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="loginfrm">
                    <label htmlFor="firstName">Visitors First Name</label>
                    <div className="inp">
                      <span className="material-symbols-outlined">person</span>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="loginfrm">
                    <label htmlFor="lastName">Visitors Last Name</label>
                    <div className="inp">
                      <span className="material-symbols-outlined">person</span>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="loginfrm">
                    <label htmlFor="visitorType">Visitor type</label>
                    <div className="inp">
                      <span className="material-symbols-outlined">person</span>
                      <select
                        id="visitorType"
                        name="visitorType"
                        value={visitorType}
                        onChange={(e) => setVisitorType(e.target.value)}
                      >
                        <option value="Vendor">Vendor</option>
                        <option value="Visitor">Visitor</option>
                      </select>
                    </div>
                  </div>
                  <div className="loginfrm">
                    <label htmlFor="whoToSee">
                      Who to see <div>Edit</div>
                    </label>
                    <div className="inp">
                      <span className="material-symbols-outlined">person</span>
                      <input
                        type="text"
                        id="whoToSee"
                        name="whoToSee"
                        value={whoToSee}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="loginfrm">
                    <label htmlFor="purpose">Purpose for visit</label>
                    <div className="inp">
                      <span className="material-symbols-outlined">chat</span>
                      <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="loginfrm">
                    <label htmlFor="note">Private note</label>
                    <div className="inp">
                      <span className="material-symbols-outlined">chat</span>
                      <input
                        id="note"
                        name="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <input type="hidden" id="staffId" value={staffId} readOnly />
              </div>
              <div className="loginfrm">
                {/* <button id="submitBtn" onClick={handleSubmit}>
                  Submit Request
                </button>
                <button id="loadingBtn" style={{ display: 'none' }} disabled>
                  <i className="fa fa-spinner fa-spin" /> Loading
                </button> */}

                { isLoading ? (
        <button id="loadingBtn" style={{ display: "flex", fontSize: '13px' }} disabled>
          {error && <span>{error}</span>} <span className='loading-spinner'></span>
        </button>
      ) : (
        <button id="submitBtn" onClick={posthData}>
          Proceed
        </button>
      )}
              </div>
            </div>
          </div>
          <div className="imageside filling">
            <div className="log">
              <div
                className="sidebarlogo"
                style={{ margin: 1, justifyContent: 'start' }}
              >
              <Image
         width={100}
         height={100}
         src={mylogo} alt="" />
                Vizitors
              </div>
              <p>
                Rest assured, your data is safeguarded against any potential leaks and is strictly reserved for its intended purpose. We respect your privacy and guarantee that your information will never be utilized for promotional services or shared with any third parties without your explicit consent.
              </p>
            </div>
          </div>
        </div>
      );
    };
export default page
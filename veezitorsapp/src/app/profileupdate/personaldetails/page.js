"use client"
import Profileupdatelayout from '@/components/layouts/Profileupdatelayout'
import React, { useState, useContext, useEffect } from 'react';
import { Toaster, toast } from "sonner";
import { VeeContext } from "@/context/veecontext";
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
// import { usePaystackPayment } from 'react-paystack';
import { PaystackButton } from 'react-paystack'
import { jwtDecode } from 'jwt-decode';
const page = () => {
  const [step, setStep] = useState(1);
  const [width, setWidth] = useState(0);
  const [organizationNameValue, setOrganizationNameValue] = useState('');
  const [organizationTypeValue, setOrganizationTypeValue] = useState('');
  const [websiteURLValue, setWebsiteURLValue] = useState('');
  const [contactEmailValue, setContactEmailValue] = useState('');
  const [preferredContactValue, setPreferredContactValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Basic Plan');
  const [selectedPlanid, setSelectedPlanid] = useState(1);
  const [companyLogoValue, setCompanyLogoValue] = useState(null);
  const [primaryColorValue, setPrimaryColorValue] = useState('#a92f41');
  const [secondaryColorValue, setSecondaryColorValue] = useState('#f4f4f4');
  const [email, setEmail] = useState('odahviktor@gmail.com');
  const [paymentref, setPaymentref] = useState('');
  const [amount, setAmount] = useState(0);
  const [paid, SetPaid] = useState(false);
  const [userid, setUserId] = useState(false);
  const {visitordataloaded, plans, refreshAccessToken, axiosInstance,  setError  } = useContext(VeeContext);
  const [formsubmited, setformsubmitted] = useState(false);
  const access = Cookies.get('access_token')
  const router = useRouter()

  const onSuccess = (reference) => {
    console.log(reference);
    // Handle successful payment
  };

  const onClose = () => {
    console.log('Payment closed');
    // Handle when the user closes the payment dialog
  };

  
  // Update companyLogoValue state when file input changes
  const handleCompanyLogoChange = (event) => {
    setCompanyLogoValue(event.target.files[0]);
  };


  const increaseStep = () => {
    if (step === 1) {
      // Check if organizationNameValue, organizationTypeValue, and websiteURLValue are set
      if (organizationNameValue && organizationTypeValue && websiteURLValue) {
        setStep(prevStep => prevStep + 1);
        setWidth(prevStep => prevStep + 25);
      } else {
        // Display an error message or prevent moving to the next step
        // For example:
        toast.info('Please fill in all required fields before proceeding to the next step.')
 
      }
    } else if (step === 2) {
      // Check if contactEmailValue, preferredContactValue, and addressValue are set
      if (contactEmailValue && preferredContactValue && addressValue) {
        setStep(prevStep => prevStep + 1);
        setWidth(prevStep => prevStep + 25);
      } else {
        toast.info('Please fill in all required fields before proceeding to the next step.')
      }
    } else if (step === 3) {
      // Check if primaryColorValue and secondaryColorValue are set
      if (primaryColorValue && secondaryColorValue) {
        setStep(prevStep => prevStep + 1);
        setWidth(prevStep => prevStep + 25);
      } else {
        toast.info('Please fill in all required fields before proceeding to the next step.')
      }
    } else if (step === 4) {
      // Check if selectedPlan is set
      if (selectedPlan) {
        setStep(prevStep => prevStep + 1);
        setWidth(prevStep => prevStep + 25);
      } else {
        toast.info('Please fill in all required fields before proceeding to the next step.')
      }
    }
  };

  const decreaseStep = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
      setWidth(prevStep => prevStep -= 25 )
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = Cookies.get('access_token');
      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        setUserId(decodedToken.user_id);
      }
    }
  }, []);

  const payload = {
    "organization_name": organizationNameValue,
    "organization_type": organizationTypeValue,
    "website": websiteURLValue,
    "organization_address": addressValue,
    "organization_email": contactEmailValue,
    "organization_contactmethod": preferredContactValue,
    "primary_color": primaryColorValue,
    "secondary_color": secondaryColorValue,
    "user": userid,
    "myplan": selectedPlanid,
    "payment_ref": paymentref
}

async function approve() {
  setformsubmitted(true);
  
  if(userid){
    try {
      const response = await axiosInstance.post(`/Companysetup`, payload);
      console.log(response.data); // Assuming the response data contains useful information
      
    
      if(response.data){
       Cookies.set('userdata_token', response.data.token, { expires: 14 });
  
       refreshAccessToken();
      }
      setError(false)
   // Refresh the token after receiving the response
  
      // Assuming you use toast for notifications
      toast.success(`Profile setup complete.`);
      
      setTimeout(function() {
        router.replace('/dashboard');
      }, 1500);
      
      setformsubmitted(false);
    } catch (error) {
      console.error(error.message);
      
      // Assuming you use toast for notifications
      toast.error(`An error occurred: ${error.message}`);
  
      setformsubmitted(false);
    }
  
  } 


}



  
const publicKey = 'pk_test_449489710495ea60cf1fadb303857f546d6e31c6';
const componentProps = {
  email,
  amount,
  metadata: {
    "Organization Name": organizationNameValue,
    'Payment For': 'Veezitor Subscription',
    'plan' : selectedPlan,
    'Contact Email': 'odahviktor@gmail.com',
  },
  publicKey,
  text: "Pay Now",
  onSuccess: ({ reference }) => {
    // alert(`Your purchase was successful! Transaction reference: ${reference}`),
    toast.success(`our purchase was successful!, Thank you`);
    SetPaid(true)
    setPaymentref(reference)
    increaseStep()
  
  },
  onClose: () => alert("Wait! You need this subscription, don't go!!!!"),
}

const handlePlanChange = (planname, Planprice, planid) => {
  setSelectedPlan(planname);
  setAmount(Planprice * 100);
  setSelectedPlanid(planid)
};

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
 
          <div className="step active-step" id="step1">
            <small> 1/3</small>
            <div className="sectiontitle">Please fill with your Company details</div>
            <div className="loginfrm">
              <label htmlFor="organizationName">Organization Name</label>
              <div className="inp">
                <span className="material-symbols-outlined">corporate_fare</span>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={organizationNameValue}
                  onChange={(e) => setOrganizationNameValue(e.target.value)}
                />
              </div>
            </div>
            <div className="loginfrm">
              <label htmlFor="organizationType">Organization Type</label>
              <div className="inp">
                <span className="material-symbols-outlined">checklist</span>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={organizationTypeValue}
                  onChange={(e) => setOrganizationTypeValue(e.target.value)}
                >
                       <option value=""></option>
                  <option value="Corporate">Corporate</option>
                  <option value="Non-Profit">Non-Profit</option>
                </select>
              </div>
            </div>
            <div className="loginfrm">
              <label htmlFor="websiteURL">Website URL</label>
              <div className="inp">
                <span className="material-symbols-outlined">language</span>
                <input
                  type="url"
                  id="websiteURL"
                  name="websiteURL"
                  placeholder="www.example.com"
                  value={websiteURLValue}
                  onChange={(e) => setWebsiteURLValue(e.target.value)}
                />
              </div>
            </div>
          </div>
      
        );
      case 2:
        return (
          <div className="step active-step" id="step2">
          <small> 2/3</small>
          <div className="sectiontitle">
            Please fill with your Company Contact details
          </div>
          <div className="loginfrm">
            <label htmlFor="contactEmail">Contact Email Address</label>
            <div className="inp">
              <span className="material-symbols-outlined">mail</span>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={contactEmailValue}
                onChange={(e) => setContactEmailValue(e.target.value)}
              />
            </div>
          </div>
          <div className="loginfrm">
            <label htmlFor="preferredContact">Preferred Contact Method</label>
            <div className="inp">
              <span className="material-symbols-outlined">person</span>
              <select
                id="preferredContact"
                name="preferredContact"
                value={preferredContactValue}
                onChange={(e) => setPreferredContactValue(e.target.value)}
              >
                        <option value=""></option>
                <option value="Vendor">Vendor</option>
                <option value="Visitor">Visitor</option>
              </select>
            </div>
          </div>
          <div className="loginfrm">
            <label htmlFor="address">Address</label>
            <div className="inp">
              <textarea
                id="address"
                name="address"
                cols={30}
                rows={5}
                value={addressValue}
                onChange={(e) => setAddressValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        );
      case 3:
        return (
          <div className="step active-step" id="step3">
          <small> 3/3</small>
          <div className="sectiontitle">
            Please fill with your Company Contact details
          </div>
          <div className="loginfrm">
            <label htmlFor="companyLogo">Company Logo</label>
            <div className="inp">
              <span className="material-symbols-outlined">image</span>
              <input
                type="file"
                id="companyLogo"
                name="companyLogo"
                onChange={(e) => setCompanyLogoValue(e.target.files[0])}
              />
            </div>
          </div>
          <div className="loginfrm">
            <label htmlFor="primaryColor">Company Primary Color</label>
            <div className="inp">
              <span className="material-symbols-outlined">palette</span>
              <input
                type="color"
                id="primaryColor"
                name="primaryColor"
                value={primaryColorValue}
                onChange={(e) => setPrimaryColorValue(e.target.value)}
              />
            </div>
          </div>
          <div className="loginfrm">
            <label htmlFor="secondaryColor">Company Secondary Color</label>
            <div className="inp">
              <span className="material-symbols-outlined">palette</span>
              <input
                type="color"
                id="secondaryColor"
                name="secondaryColor"
                value={secondaryColorValue}
                onChange={(e) => setSecondaryColorValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        );
      case 5:
        return (
          <div className="step active-step" id="step5">
          <small> 5</small>
          <div className="sectiontitle">Save Data</div>

          <div className="loginfrm">
        {formsubmited ?        
   <button id="loadingBtn" style={{ display: "flex" }} disabled="">
   <span className='loading-spinner'></span> Loading
    </button>
        :
        <button id="submitBtn" onClick={approve}>
        Submit Data
      </button> 
         }
 
      
      </div>


          </div>
        );
        case 4:
          return (
            <div className="step active-step" id="step4">
            <small> 4/4</small>
            <div className="sectiontitle">Choose A Plan</div>
            {plans.length > 0 ? (
          plans.map((plan) => (
            <div className="radio-card" key={plan.id}>
              <input
                type="radio"
                id={plan.planname}
                name="plan"
                value={plan.planname}
                onChange={() => handlePlanChange(plan.planname, plan.Planprice, plan.id)}
                checked={selectedPlan === plan.planname}
              />
              <label htmlFor={plan.planname}>
                <div>
                  <h3>{plan.planname}</h3>
                  <p>Cost: ₦{plan.Planprice.toLocaleString()} per month</p>
                  <p className="subtext">{plan.plandescription}</p>
                </div>
              </label>
            </div>
          ))
        ) : (
          <p>No plans available</p>
        )}
  
            </div>
          );
      default:
        return null;
    }
  };



  return (
    <Profileupdatelayout>

      <div
  id="progressbar"
  className="ui-progressbar ui-widget ui-widget-content ui-corner-all"
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={0}
>
  <div
    className="ui-progressbar-value ui-widget-header ui-corner-left"
    id="pbar"
    style={{ width: `${width}%` }}
  />
</div>

{renderStepContent()}

<div className="nstep">
        {step !== 1 && <button onClick={decreaseStep}>Back</button>}
        {step === 4 && selectedPlan !== 'Basic Plan' || selectedPlan !== 'Basic Plan'? (
  <PaystackButton className="paystack-button" {...componentProps} />
) : (
  step !== 5 && <button onClick={increaseStep}>Next</button>
)}
      </div>


    </Profileupdatelayout>
  )
}

export default page
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const Updateprofilemodal = () => {
    const router = useRouter()
    const [isLoading, setIsloading] = useState(false);
    const handleprofileupdate = () => {
        setIsloading(true)
        setTimeout(function() {
           
          router.replace('/profileupdate/personaldetails')
          setIsloading(false)
        }, 1000);
      };
  return (
    <div className="loading-over2" style={{ display: "block" }}>
    <div className="popup">
 
      <div className="secoact">
        <div className="logoacs">
        <img src="modal.png" alt="" />
        </div>
        <div className="logomen">Update Your Profile</div>
        <div className="logobod">
        Personalize Your Journey: Please Update Your Profile to Continue to Your Dashboard and Unlock Customized Features and Content.
        </div>
        <div className="loginfrm">
        {isLoading ?    
        <button id="loadingBtn" style={{ display: "flex" }} disabled="">
   <span className='loading-spinner'></span> Loading
    </button>
        :
        <button id="submitBtn" onClick={handleprofileupdate}>
          Proceed
      </button> } 
   
      </div>
      </div>

    </div>
  </div>
  )
}

export default Updateprofilemodal
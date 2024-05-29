import React, { useState, useContext } from 'react';
import { Toaster, toast } from 'sonner'

const NewQrcode = ({toggle, axiosInstance, fetchQrcode}) => {
  const [id, setId] = useState("abt");
  const [isLoading, setIsloading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (id.startsWith('abt')) {
      setId(inputValue);
    } else {
      setId('abt' + inputValue.slice(3));
    }
  };

  const postData = {
    qrcodeid: id,
  };


  const handleSubmit = () => {
    setIsloading(true)
    // Perform submission logic here

    axiosInstance.post('/createuserqrcard', postData)
    .then(response => {
      console.log('Response:', response.data);

      fetchQrcode();
      toggle();
      toast.success(`Successful`);
      setIsloading(false)
    })
    .catch(error => {
      console.error('There was an error!', error);
      toast.error(error?.response?.data?.detail || 'An Error Occured')
      setIsloading(false)
    });
  };

  return (
    <div className="loading-over2" style={{ display: "flex" }}>
      <div className="floatingform smallerfloat">
        <div className="sectiontitle col">
          <div className="jc">
            New Qrcode{" "}
            <span id="closex" onClick={() => toggle()}>
            <span class="material-symbols-outlined">
close
</span>
            </span>
          </div>
          {/* {phoneNumber} {isValid ? 'valid' : 'invalid'}  */}
          <small> Fill The Below Details To Create A Tag    </small>
        </div>
        <div className="loginside mylss mylside mylssinit">
          <div className="loginfrm">
            <label htmlFor="firstname">Tag ID</label>
            <div className="inp">
            <span className="material-symbols-outlined">
            qr_code_2

</span>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={id}
                onChange={handleChange}
                maxLength={13}
              />
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

export default NewQrcode;

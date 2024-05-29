import React, { useState, useContext } from 'react';
import { Toaster, toast } from 'sonner'

const Smtpform = ({toggle, axiosInstance, fetchintegrations}) => {
  const [id, setId] = useState("abt");
  const [isLoading, setIsloading] = useState(false);
  const [host, setHost] = useState('');
  const [port, setPort] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [useTls, setUseTls] = useState(false);
  const [useSsl, setUseSsl] = useState(true);

  const [result, setResult] = useState('');



  const postData = {
    host,
    port,
    username,
    password,
    use_tls: useTls,
    use_ssl: useSsl,
  };


  const handleSubmit = () => {
    setIsloading(true)
    // Perform submission logic here

    axiosInstance.post('/smtpsetup', postData)
    .then(response => {
      console.log('Response:', response.data);
      toggle();
      fetchintegrations();
    //   fetchQrcode();

      toast.success(response.data.message || `Successful`);
      setIsloading(false)
    })
    .catch(error => {
      console.error('There was an error!', error);
      toast.error(error?.response?.data?.error || 'An Error Occured')
      setIsloading(false)
    });
  }

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
        <div className="loginside mylss mylside ">
        <div className="loginfrm">
          <label htmlFor="host">Host</label>
          <div className="inp">
            <span className="material-symbols-outlined">dns</span>
            <input
              type="text"
              id="host"
              name="host"
              value={host}
              onChange={(e) => setHost(e.target.value)}
            />
          </div>
        </div>
        <div className="loginfrm">
          <label htmlFor="port">Port</label>
          <div className="inp">
            <span className="material-symbols-outlined">swap_vert</span>
            <input
              type="number"
              id="port"
              name="port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
          </div>
        </div>
        <div className="loginfrm">
          <label htmlFor="username">Username</label>
          <div className="inp">
            <span className="material-symbols-outlined">person</span>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="loginfrm">
          <label htmlFor="password">Password</label>
          <div className="inp">
            <span className="material-symbols-outlined">lock</span>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="loginfrm">
          <label htmlFor="useTls">Use TLS</label>
          <div className="inp">
            <span className="material-symbols-outlined">security</span>
            <select
              id="useTls"
              name="useTls"
              value={useTls ? 'yes' : 'no'}
              onChange={(e) => setUseTls(e.target.value === 'yes')}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="loginfrm">
          <label htmlFor="useSsl">Use SSL</label>
          <div className="inp">
            <span className="material-symbols-outlined">verified_user</span>
            <select
              id="useSsl"
              name="useSsl"
              value={useSsl ? 'yes' : 'no'}
              onChange={(e) => setUseSsl(e.target.value === 'yes')}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
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

export default Smtpform;

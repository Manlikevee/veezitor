'use client'
import Dashboardlayout from '@/components/layouts/Dashboardlayout'
import Employeetable from '@/components/tables/Employeetable'
import { VeeContext } from '@/context/veecontext';
import React, { useContext, useState } from 'react'
import NewEmployeeForm from '@/components/utility/NewEmployeeForm';
import Smtpform from '@/components/utility/Smtpform';
import { toast } from 'sonner';
const page = () => {
  const [showForm, setShowForm] = useState(false);
  const { isOpen, test, setTest, username, myqrcode , loadingmyqrcode, employee, employeedataloaded, axiosInstance, fetchintegrations, integrations } = useContext(VeeContext);
  const [activeTag, setActiveTag] = useState("Discover");
  
  const toggleFormVisibility = () => {
    // alert('ddddddddddd')
    {!integrations?.smtp?.active ? (setShowForm(prevShowForm => !prevShowForm))  : (toast.error(`Already Integrated With ${integrations?.smtp?.username}`)) }
    // setShowForm(prevShowForm => !prevShowForm);
  }; 
  const discoverCardData = [
    {
      id: 1,
      imgSrc: "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_128px.png",
      text: "SMTP Integration",
      body: "Enable seamless email communications by integrating with SMTP servers, allowing automatic email notifications and confirmations to visitors.",
      buttonText: "Activate",
      btnfunc: toggleFormVisibility
    },
    {
      id: 2,
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      text: "WhatsApp Notification",
      body: "Keep visitors informed and engaged by sending real-time notifications and updates through WhatsApp, ensuring timely communication.",
      buttonText: "Activate"
    },
    {
      id: 3,
      imgSrc: "https://static.sms.to/images/logo.svg",
      text: "SMS.TO",
      body: "Enhance communication with visitors by integrating SMS.TO for sending instant text message notifications and reminders.",
      buttonText: "Coming Soon"
    },
    {
      id: 4,
      imgSrc: "https://www.ribbonselect.com/wp-content/uploads/2017/08/Jargon-buster-QR-codes.png",
      text: "Badge Printing",
      body: "Streamline visitor identification by integrating with badge printing systems, enabling quick and efficient printing of visitor badges with QR codes.",
      buttonText: "Activate"
    },
    {
      id: 5,
      imgSrc: "https://images.squarespace-cdn.com/content/v1/5db02f1e0f141315ac8751cc/1595573219499-VTAH01P5IQRZETTZJCSU/customer-satisfaction-scale.jpg",
      text: "Visitor Feedback",
      body: "Collect valuable insights by integrating visitor feedback systems, allowing visitors to provide ratings and comments on their experience.",
      buttonText: "Activate"
    },
    {
      id: 6,
      imgSrc: "https://dlan3xcpo7oaf.cloudfront.net/wp-content/uploads/2017/12/online-contract-signing.jpg",
      text: "E-Signature and Consent",
      body: "Facilitate secure and efficient document handling by integrating e-signature solutions, enabling visitors to sign documents and provide consent digitally.",
      buttonText: "Coming Soon"
    },
  ];

  const mydiscoverccard = [
    {
      id: 1,
      imgSrc: "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_128px.png",
      text: "SMTP Integration",
      body: "Enable seamless email communications by integrating with SMTP servers, allowing automatic email notifications and confirmations to visitors.",
      buttonText: "Activate",
      key: 'smtp' // Added a key to match with the integrations object
    },
    {
      id: 2,
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      text: "WhatsApp Notification",
      body: "Keep visitors informed and engaged by sending real-time notifications and updates through WhatsApp, ensuring timely communication.",
      buttonText: "Activate",
      key: 'whatsapp' // Added a key to match with the integrations object
    },
    {
      id: 4,
      imgSrc: "https://www.ribbonselect.com/wp-content/uploads/2017/08/Jargon-buster-QR-codes.png",
      text: "Badge Printing",
      body: "Streamline visitor identification by integrating with badge printing systems, enabling quick and efficient printing of visitor badges with QR codes.",
      buttonText: "Activate",
      key: 'badgeprinting' // Added a key to match with the integrations object
    },
    {
      id: 5,
      imgSrc: "https://images.squarespace-cdn.com/content/v1/5db02f1e0f141315ac8751cc/1595573219499-VTAH01P5IQRZETTZJCSU/customer-satisfaction-scale.jpg",
      text: "Visitor Feedback",
      body: "Collect valuable insights by integrating visitor feedback systems, allowing visitors to provide ratings and comments on their experience.",
      buttonText: "Activate",
      key: 'feedback' // Added a key to match with the integrations object
    }
  ];
  
  const filteredDiscoverCards = mydiscoverccard.filter(card => {
    const key = card.key;
    return integrations[key] !== null && integrations[key] !== undefined;
  });
    const handleTagClick = (targetId) => {
        setActiveTag(targetId);
      };

      

  return (
    <Dashboardlayout>

<>
{}
 {showForm && <Smtpform toggle={toggleFormVisibility} axiosInstance={axiosInstance} fetchintegrations={fetchintegrations}/>}

 <>
  <div className="sectionheader">
    <div className="sectiontitle">Connections</div>
  </div>
  <div className="sectionbody">
    <div className="sectiontags">

      <div
            className={`tagone tag ${
              activeTag === "Discover" ? "active" : ""
            }`}
            onClick={() => handleTagClick("Discover")}
          >
             Discover
          </div>
          <div
            className={`tagtwo tag ${
              activeTag === "Your connections" ? "active" : ""
            }`}
            onClick={() => handleTagClick("Your connections")}
          >
            Your connections
          </div>
      {/* <div class="tagthree tag" data-target="rolesContent">Available Only</div> */}
    </div>
  </div>
</>

<div id="allEmployeesContent"   className={
          activeTag === "Discover" ? "content active" : "content"
        }>
  <div className="mytablesearch">
    <div className="searchbar">
      <span className="material-symbols-outlined"> search </span>
      <input
        type="text"
        placeholder="Search connections"
        id="searchinput"
        onkeyup="search()"
      />
    </div>
    <div className="tabicons">
      <div className="ticonone">
        <span className="material-symbols-outlined"> list </span>
      </div>
      <div className="ticonone">
        <span className="material-symbols-outlined"> grid_view </span>
      </div>
    </div>
  </div>
  <br />
  <div className="tagsgrids" id="tagsgrid">
  {discoverCardData.map(card => (
    <div className="discovercard" key={card.id}>
      <div className="discoverimg">
        <img src={card.imgSrc} alt="" />
      </div>
      <div className="discovertext">{card.text}</div>
      <div className="discoverbody">{card.body}</div>
      <button onClick={card.btnfunc ? card.btnfunc : () => {}}>{card.buttonText}</button>
    </div>
  ))}
  </div>
</div>


<div id="allEmployeesContent"   className={
          activeTag === "Your connections" ? "content active" : "content"
        }>
  <div className="mytablesearch">
    <div className="searchbar">
      <span className="material-symbols-outlined"> search </span>
      <input
        type="text"
        placeholder="Search connections"
        id="searchinput"
        onkeyup="search()"
      />
    </div>
    <div className="tabicons">
      <div className="ticonone">
        <span className="material-symbols-outlined"> list </span>
      </div>
      <div className="ticonone">
        <span className="material-symbols-outlined"> grid_view </span>
      </div>
    </div>
  </div>
  <br />
  <div className="tagsgrids" id="tagsgrid">
  {filteredDiscoverCards.map(card => (
    <div className="discovercard" key={card.id}>
      <div className="discoverimg">
        <img src={card.imgSrc} alt="" />
      </div>
      <div className="discovertext">{card.text}</div>
      <div className="discoverbody">{card.body}</div>
      <button onClick={card.btnfunc ? card.btnfunc : () => {}}>{card.buttonText}</button>
    </div>
  ))}
  </div>
</div>
</>



    </Dashboardlayout>
  )
}

export default page
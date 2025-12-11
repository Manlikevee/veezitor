"use client";
import Dashboardcard from "@/components/cards/Dashboardcard";
import Dashboardlayout, {
  SidebarContext,
} from "@/components/layouts/Dashboardlayout";
import { UserData } from "../../context/Veezitorcontext";
import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { VeeContext } from "@/context/veecontext";
import Visitorstable from "@/components/tables/Visitorstable";
import Updateprofilemodal from "@/components/utility/Updateprofilemodal";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import Acceptvisit from "@/components/utility/Acceptvisit";
const ClearSearchParams = dynamic(() => import('@/components/utility/ClearSearchParams'), { ssr: false });
const DynamicQrcard = dynamic(() => import('../../components/Userqrpop'), {
  ssr: false,
});
const page = () => {
  const {visitordataloaded, isOpen, test, setTest, companySetup, fetchvisitors,  acceptvisitor, visitors , awaiting, pendingApproval, reshedule, inProgress, employeedataloaded, togglevisitorbar,
  loadingProfile, 
        setLoadingProfile,
        profile, 
        setProfile,
        fetchProfile,

   } = useContext(VeeContext);
  const [firstName, setFirstName] = useState("");
  const [myArray, setMyArray] = useState([]);
  const [activeTag, setActiveTag] = useState("allEmployeesContent");
  const [username, setUsername] = useState("");
  const [activepop, setactivepop] = useState(false);
  const [myurl, setmyurl] = useState("");

const copyToClipboard = async () => {
  try {
    const accessdatatoken = Cookies.get('userdata_token');
    const decodedToken = jwtDecode(accessdatatoken);

    const profiledata = profile || {};
    const staff_id = profiledata?.employee_detail?.staff_id || null;

    // --------------------------------------------------
    // BUILD THE URL
    // --------------------------------------------------
    let textToCopy;

    if (staff_id && myqrcodeurl) {
      // Staff-specific visitation link
      textToCopy = `https://veezitor.vercel.app/visitation/visitation/4022059937?company_id=${myqrcodeurl}&ref=${staff_id}`;
    } else {
      // Default new visitation link
      textToCopy = `${window.location.protocol}//${window.location.host}/visitation/newvisitation/${decodedToken?.data?.ref}`;
    }

    // Copy to clipboard
    await navigator.clipboard.writeText(textToCopy);

    setmyurl(textToCopy);
    handlymysow();

    toast.success('Copied To Clipboard');
  } catch (err) {
    console.error(err);
    toast.error('Failed to copy!');
  }
};



  function handlymysow(){
    setactivepop(!activepop)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = Cookies.get('access_token');
      if (accessToken) {
        // const fetchvisitors = () => {
        //   console.log('Fetching visitors...');
        //   // Your fetch logic here
        // };


        fetchvisitors(); // Initial fetch
        const intervalId = setInterval(fetchvisitors, 300000000); // Set up interval to fetch every 40 seconds

        const decodedToken = jwtDecode(accessToken);
        setUsername(decodedToken.username);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }
    }
  }, []);



  const handleTagClick = (targetId) => {
    setActiveTag(targetId);
  };


  return (
    <Dashboardlayout>
      <Acceptvisit togglevisitorbar={togglevisitorbar} acceptvisitor={acceptvisitor}   />
      {/* <Updateprofilemodal/> */}

      {
activepop && (<DynamicQrcard data={myurl}  togglemyqr={handlymysow} companySetup={companySetup}   />)
      }
      <div className="sectionheader">
        <div className="sectiontitle col">
          <div>
            Welcome back, {username} <span id="todIcon">☀️ 🌙</span>
          </div>
          <small>Here is what we have for you today</small>
        </div>
        <div className="sectionbtn">
          <div className="sectionbtn">
            <div className="exportbtn" onClick={copyToClipboard}>
              <span className="material-symbols-outlined">
                system_update_alt
              </span>
              Export
            </div>
            <div className="exportbtn newvisitor" onClick={togglevisitorbar}>
              <span className="material-symbols-outlined">
                system_update_alt
              </span>
              New Visitor
            </div>
            {/* <ClearSearchParams/> */}
          </div>
          <div className="newvisitor" />
        </div>
      </div>

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

      <div className="sectionbody">
        <div className="sectiontags">
          <div
            className={`tagone tag ${
              activeTag === "allEmployeesContent" ? "active" : ""
            }`}
            onClick={() => handleTagClick("allEmployeesContent")}
          >
            Awaiting Confirmation
          </div>
          <div
            className={`tagtwo tag ${
              activeTag === "teamsContent" ? "active" : ""
            }`}
            onClick={() => handleTagClick("teamsContent")}
          >
            Pending Approval
          </div>
          <div
            className={`tagthree tag ${
              activeTag === "rolesContent" ? "active" : ""
            }`}
            onClick={() => handleTagClick("rolesContent")}
          >
            Reshedules
          </div>
          <div
            className={`tagfour tag ${
              activeTag === "inprogressContent" ? "active" : ""
            }`}
            onClick={() => handleTagClick("inprogressContent")}
          >
            InProgress
          </div>
        </div>
      </div>

      <div
        id="allEmployeesContent"
        className={
          activeTag === "allEmployeesContent" ? "content active" : "content"
        }
      >
        <div className="mytablesearch">
          <div className="searchbar">
            <span className="material-symbols-outlined"> search </span>
            <input
              type="text"
              placeholder="Search Visitor by name"
              id="searchinput"
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
        <div className="mytable">
          <div className="ttable visit mdt">
            <div className="tablerow">
      
              <div className="acc">Name</div>
              <div className="acc">Email</div>
              <div className="acc initialize">Phone Number</div>
              <div className="acc initialize">Visiting?</div>
              <div className="acc initialize">Status</div>
              <div className="acc initialize">Time</div>
            </div>
            <div id="displaydatahere">

            { visitordataloaded ? <Visitorstable mydata={awaiting} togglevisitorbar={togglevisitorbar}  /> : 'loadingggggggggg'}


            

            </div>
          </div>
        </div>
      </div>

      <div
        id="teamsContent"
        className={activeTag === "teamsContent" ? "content active" : "content"}
      >
        <div className="mytablesearch">
          <div className="searchbar">
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
            >
              
              search
            </span>
            <input
              type="text"
              placeholder="Search Visitor by name"
              id="input"
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
        <div className="mytable">
          <div className="ttable visit mdt">
            <div className="tablerow">
              <div className="acc">Name</div>
              <div className="acc">Email</div>
              <div className="acc initialize">Phone Number</div>
              <div className="acc initialize">Visiting?</div>
              <div className="acc initialize">Status</div>
              <div className="acc initialize">Time</div>
            </div>
            <div id="displaynonpending">
            { visitordataloaded ? <Visitorstable mydata={pendingApproval} togglevisitorbar={togglevisitorbar}  /> : 'loadingggggggggg'}
            </div>
          </div>
        </div>
      </div>


      
      <div
        id="rolesContent"
        className={activeTag === "rolesContent" ? "content active" : "content"}
      >
        <div className="mytablesearch">
          <div className="searchbar">
            <span className="material-symbols-outlined"> search </span>
            <input type="text" placeholder="Search Visitor by name" />
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
        <div className="mytable">
          <div className="ttable visit mdt">
            <div className="tablerow">
              <div className="acc">Name</div>
              <div className="acc">Email</div>
              <div className="acc initialize">Phone Number</div>
              <div className="acc initialize">Visiting?</div>
              <div className="acc initialize">Reshedule Date</div>
            </div>
            <div className="tabledata">
              <div className="acc nodata">
                <img src="Group26649.png" />
                <h5 className="sectiontitle" style={{ fontSize: 20 }}>
                  No Reshedules
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="inprogressContent"
        className={
          activeTag === "inprogressContent" ? "content active" : "content"
        }
      >
        <div className="mytablesearch">
          <div className="searchbar">
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
            >
              search
            </span>
            <input
              type="text"
              placeholder="Search Visitor by name"
              id="input"
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
        <div className="mytable">
          <div className="ttable visit mdt">
            <div className="tablerow">
              <div className="acc">Name</div>
              <div className="acc">Email</div>
              <div className="acc initialize">Phone Number</div>
              <div className="acc initialize">Visiting?</div>
              <div className="acc initialize">Status</div>
              <div className="acc initialize">Time</div>
            </div>
            <div id="displayinprogress">

            { visitordataloaded ? <Visitorstable mydata={inProgress} togglevisitorbar={togglevisitorbar}  /> : 'loadingggggggggg'}
            </div>
          </div>
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default page;

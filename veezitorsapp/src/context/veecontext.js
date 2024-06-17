"use client";

import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Toaster, toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// Create the context
export const VeeContext = createContext();

// Provide a default value (optional)
const defaultValues = {
  isOpen: false,
  test: "Default test value",
  username: "",
};

export const VeeContextProvider = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(defaultValues.isOpen);
  const [test, setTest] = useState(defaultValues.test);
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [employee, setEmployee] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [myqrcode, setQrcode] = useState([]);
  const [loadingmyqrcode, setLoadingqr] = useState(false);
  const [employeedataloaded, setemployeedataloaded] = useState(false);
  const [awaiting, setAwaiting] = useState([]);
  const [pendingApproval, setPendingApproval] = useState([]);
  const [reshedule, setReshedule] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [plans, setPlans] = useState([]);
  const [visitordataloaded, setVisitordataloaded] = useState(false);
  const [companySetup, setCompanySetup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [logo, setlogo] = useState()
  const [integrations, setIntegrations] = useState([]);
  const [isvisitorbaropen, setisVistorbaropen] = useState(false);
  const [sideloading, setsideloading] = useState(true)
  const [visitationdata, setVisitationdata] = useState([]);
  const [loadingaccept, setloadingaccept] = useState(false)
  const [Uniquevisitors, setUniquevisitors] = useState([]);
  const [monthlyvisitors, setmonthlyvisitors] = useState([]);
  const [loadingmonthlyvisitors, setIsloadingmonthlyvisitors] = useState(true);

  
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    setIsOverlayOpen((prevState) => !prevState);
  };


  const clearSearchParams = () => {
    // Get the current URL without query parameters
    const url = new URL(window.location);
    url.search = ''; // Clear the query string

    // Use the history API to replace the current entry
    window.history.replaceState({}, document.title, url.toString());
  };

  const togglevisitorbar = async (ref) => {
    setisVistorbaropen((prevState) => !prevState);
    
    if (ref !== 'close') {
      setsideloading(true);
  setVisitationdata([])
      try {
        const payload = {
          post_id: ref,
        };
  

        
        // Define endpoint
        const endpoint = 'https://veezitorbackend.vercel.app/getvisitordetails';
        
        // Make the POST request
        const response = await axios.post(endpoint, payload);
  
        if (response.status === 200) {
          console.log('response', response);
          setVisitationdata(response.data?.visitorsdata);
          toast.success('Visitation details fetched successfully');
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          toast.error(error.response.data.message);
        } else if (error.request) {
          // Request was made but no response received
          toast.error('No response received from the server.');
        } else {
          // Something else happened in setting up the request
          toast.error(error.message || 'No response received from the server.');
        }
      } finally {
        setsideloading(false);
      }
    }
  };

 async function acceptvisitor(ref){
if (ref){
  if (ref !== 'close') {
    setloadingaccept(true)
       try {
         const payload = {
           post_id: ref,
         };
   
         // Define endpoint
         const endpoint = '/acceptvisitor';
         
         // Make the POST request
         const response = await axiosInstance.post(endpoint, payload);
   
         if (response.status === 200) {
           console.log('response', response);
    
           toast.success('Visitation details updated successfully');
           setVisitationdata(response.data?.visitorsdata);
           setVisitors(response.data?.visitorserializer);
           clearSearchParams();
         }
         setloadingaccept(false);
         togglevisitorbar('close');
       } catch (error) {
         if (error.response) {
           // Server responded with a status other than 200 range
           toast.error(error.response.data.message);
         } else if (error.request) {
           // Request was made but no response received
           toast.error('No response received from the server.');
         } else {
           // Something else happened in setting up the request
           toast.error(error.message || 'No response received from the server.');
         }
       } finally {
    
         setloadingaccept(false);
       }
     }
}

  };

  function checkusername() {
    let accessToken = Cookies.get("access_token");
    if (accessToken) {
      // Decode access token and extract username
      const decodedDetails = jwtDecode(accessToken).username;
      const decodedid = jwtDecode(accessToken).user_id;
      setUsername(decodedDetails);
      setUserid(decodedid);
      console.log("rannnn");
    }
  };

  const fetchEmployeeData = () => {
    let accessToken = Cookies.get("access_token");
    if (accessToken ) {
      axiosInstance
        .get("/employee")
        .then((response) => {
          // Check if response is successful
          if (response.status === 200) {
            // Handle successful response
            toast.success(`Successful`);

            // If you want to do something with the data, you can store it or further process it here
            setEmployee(response.data);
            // console.log(response.data)
            setemployeedataloaded(true);
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => {
          // Handle request error

          // toast.error(`An Error Occured`);
          // You can handle errors or display them as needed
        });
    }
  };

  async function refreshAccessToken() {
    try {
      const refreshToken = Cookies.get("refresh_token");
      if (!refreshToken) {
        throw new Error("Refresh token not found");
      }
      const response = await axios.post(
        "https://veezitorbackend.vercel.app/api/token/refresh/",
        { refresh: refreshToken }
      );
      const newAccessToken = response.data.access;
      const newRefreshToken = response.data.refresh;
      // Cookies.set('access_token', newAccessToken); // Save new access token
      // Cookies.set('refresh_token', newRefreshToken); // Save new refresh token
      Cookies.set("access_token", response.data.access, { expires: 14 });
      Cookies.set("refresh_token", response.data.refresh, { expires: 14 });
      console.log("token refreshed");
      return newAccessToken; // Return the new access token
    } catch (error) {
      throw new Error("Failed to refresh access token");
    }
  };

  const axiosInstance = axios.create({
    baseURL: "https://veezitorbackend.vercel.app/", // Update base URL
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Request interceptor
  axiosInstance.interceptors.request.use(
    async (config) => {
      const access = Cookies.get("access_token");
      if (access) {
        const arrayToken = access.split(".");
        const tokenPayload = JSON.parse(atob(arrayToken[1]));
        const isExpired =
          Math.floor(new Date().getTime() / 1000) >= tokenPayload.exp;
        if (isExpired) {
          try {
            const newAccessToken = await refreshAccessToken();
            config.headers.Authorization = `Bearer ${newAccessToken}`;
            return config;
          } catch (error) {
            console.error("Failed to refresh access token:", error);
            //   VanillaToasts.create({
            //     title: 'Error!',
            //     text:  'Session Expired' ,
            //     type: 'error',
            //     timeout: 5000
            // });

            setTimeout(function () {
              // Redirect to success.html with the random ID as a parameter
              // window.location.href = `login.html`;
              router.replace("/auth/login");
            }, 2000); // 2000 milliseconds = 2 seconds
            return Promise.reject(new Error("Failed to refresh access token"));
          }
        } else {
          config.headers.Authorization = `Bearer ${access}`;
        }
      } else {
        // Access token not found, handle redirect to login or show error message
        console.log("Access token not found");
        // Example: Redirect to login page
        // window.location.href = '/login';
        //   VanillaToasts.create({
        //     title: 'Error!',
        //     text:  'Session Expired' ,
        //     type: 'error',
        //     timeout: 5000
        // });
        console.log("session expired");

        setTimeout(function () {
          // Redirect to success.html with the random ID as a parameter
          router.replace("/auth/login");
        }, 2000); // 2000 milliseconds = 2 seconds
        return Promise.reject(new Error("Access token not found"));
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle errors
      return Promise.reject(error);
    }
  );

  async function fetchCompanySetup() {

 
    try {
      setLoading(false);
      const response = await axiosInstance.get("/Companysetup");
      console.log("it rannnn", response.data); // Assuming the response data contains useful information
      setCompanySetup(response?.data?.company_obj);
      Cookies.set("userdata_token", response.data.token, { expires: 14 });
      setLoading(false);
      return response.data; // Return the data for further use if needed
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        toast.info("Kindly Setup Your Company Info.");
        setError(true);
      } else {
        console.error(`An error occurred: ${error.message}`);
        toast.error(`An error occurred: ${error.message}`);
      }
      // Optionally, handle the error in a way that suits your application
      // throw error; // Rethrow the error if you want to handle it later
    }


  };

  const fetchqrcode = () => {

    let accessToken = Cookies.get("access_token");
    if (accessToken ) {

    axiosInstance
      .get("https://veezitorbackend.vercel.app/userqrcards")
      .then((response) => {
        // Check if response is successful
        if (response.status === 200) {
          // Handle successful response
          toast.success(`Successful fetched employee's`);

          // If you want to do something with the data, you can store it or further process it here
          setQrcode(response.data);
          setLoadingqr(true);
          console.log(myqrcode);
        } else {
          toast.error(`An Error Occured`);
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Handle request error

        toast.error(`An Error Occured`);
        // You can handle errors or display them as needed
      });
    }
  };

  const fetchintegrations = () => {

    let accessToken = Cookies.get("access_token");
    if (accessToken ) {

    axiosInstance
      .get("https://veezitorbackend.vercel.app/integration")
      .then((response) => {
        // Check if response is successful
        if (response.status === 200) {
          // Handle successful response
          toast.success(`Successful fetched employee's`);

          // If you want to do something with the data, you can store it or further process it here
          setIntegrations(response.data);
 
          console.log(myqrcode);
        } else {
          toast.error(`An Error Occured`);
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Handle request error

        toast.error(`An Error Occured`);
        // You can handle errors or display them as needed
      });
    }
  };

  const fetchplans = () => {
    axios
      .get("https://veezitorbackend.vercel.app/userplans")
      .then((response) => {
        // Check if response is successful
        if (response.status === 200) {
          // Handle successful response

          // If you want to do something with the data, you can store it or further process it here
          setPlans(response.data);

          // console.log('veezitors', response.data);
        } else {
          toast.error(`An Error Occured`);
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Handle request error
        // You can handle errors or display them as needed
      });
  };

  const fetchvisitors = () => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      axiosInstance
        .get("https://veezitorbackend.vercel.app/visitor")
        .then((response) => {
          // Check if response is successful
          if (response.data) {
            // Handle successful response
            // toast.success(`Successful fetched visitor's`);

            // If you want to do something with the data, you can store it or further process it here
            setVisitors(response.data);
            console.log(response.data)
            const myvisitors = response.data
            setVisitordataloaded(true);
            if(myvisitors){
              const pendingVisitors = myvisitors.filter(
                (visitor) => visitor.status == "pending_approval"
              );
              const resheduleVisitors = myvisitors.filter(
                (visitor) => visitor.status === "reshedule"
              );
              const inProgressVisitors = myvisitors.filter(
                (visitor) => visitor.status === "inprogress"
              );
              const awaitingvisitors = myvisitors.filter(
                (visitor) => visitor.status === "awaiting_confirmation"
              );
          
              setPendingApproval(pendingVisitors);
              setReshedule(resheduleVisitors);
              setInProgress(inProgressVisitors);
              setAwaiting(awaitingvisitors);
              setVisitordataloaded(true);
            }

            // console.log('veezitors', response.data);
          } else {
            toast.error(`Anssssssss Error Occured`);
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => {
          // Handle request error

          toast.error(`An Error Occured`);
          // You can handle errors or display them as needed
        });
    }
  };

  async function signout(ref){
    if (ref){
      if (ref !== 'close') {
        setloadingaccept(true)
           try {
             const payload = {
               post_id: ref,
             };
       
             // Define endpoint
             const endpoint = '/logoutvisitor';
             
             // Make the POST request
             const response = await axiosInstance.post(endpoint, payload);
       
             if (response.status === 200) {
               console.log('response', response);
        
               toast.success('Visitor LoggedOut Successfully');
               setVisitationdata(response.data?.visitorsdata);
               fetchvisitors();
             }
             setloadingaccept(false);
             togglevisitorbar('close');
           } catch (error) {
             if (error.response) {
               // Server responded with a status other than 200 range
               toast.error(error.response.data.error);
             } else if (error.request) {
               // Request was made but no response received
               toast.error('No response received from the server.');
             } else {
               // Something else happened in setting up the request
               toast.error(error.message || 'No response received from the server.');
             }
           } finally {
        
             setloadingaccept(false);
           }
         }
    }
    
  };

  async function fetchuserdata() {

    let accessToken = Cookies.get("access_token");
    if(accessToken){
      try {
        setLoading(true);
        const response = await axiosInstance.get("/Dashboard");
        console.log("it rannnn", response.data); // Assuming the response data contains useful 
        setEmployee(response?.data?.employee_data);
        setIntegrations(response?.data?.integration);
        setQrcode(response?.data?.qrcards);
        setVisitors(response?.data?.visitor_serializer);
        setLoading(false);
        setLoadingqr(true);
        setemployeedataloaded(true);
        fetchmonthlyvisitors();
        const myvisitors = response?.data?.visitor_serializer
   
        if(myvisitors){
          const pendingVisitors = myvisitors.filter(
            (visitor) => visitor.status == "pending_approval"
          );
          const resheduleVisitors = myvisitors.filter(
            (visitor) => visitor.status === "reshedule"
          );
          const inProgressVisitors = myvisitors.filter(
            (visitor) => visitor.status === "inprogress"
          );
          const awaitingvisitors = myvisitors.filter(
            (visitor) => visitor.status === "awaiting_confirmation"
          );
      
          setPendingApproval(pendingVisitors);
          setReshedule(resheduleVisitors);
          setInProgress(inProgressVisitors);
          setAwaiting(awaitingvisitors);
          setVisitordataloaded(true);
        };
        setVisitordataloaded(true);
        toast.info("Successfully Fetched User Data.");
        return response.data; // Return the data for further use if needed
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          toast.info("Kindly Setup Your Company Info.");
          setError(true);
        } else {
          console.error(`An error occurred: ${error.message}`);
          toast.error(`An error occurred: ${error.message}`);
        }
        // Optionally, handle the error in a way that suits your application
        // throw error; // Rethrow the error if you want to handle it later
      }
    }



  };

  async function fetchuniquevisitors() {

    let accessToken = Cookies.get("access_token");
    if(accessToken){
      try {
        setLoading(true);
        const response = await axiosInstance.get("/unique");
        console.log("it rannnn", response.data); // Assuming the response data contains useful 
        setUniquevisitors(response?.data);
        return response.data; // Return the data for further use if needed
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          toast.info("Kindly Setup Your Company Info.");
          setError(true);
        } else {
          console.error(`An error occurred: ${error.message}`);
          toast.error(`An error occurred: ${error.message}`);
        }
        // Optionally, handle the error in a way that suits your application
        // throw error; // Rethrow the error if you want to handle it later
      }
    }



  };

  // async function fetchuniquevisitors() {

  //   let accessToken = Cookies.get("access_token");
  //   if(accessToken){
  //     try {
  //       setLoading(true);
  //       const response = await axiosInstance.get("/unique");
  //       console.log("it rannnn", response.data); // Assuming the response data contains useful 
  //       setUniquevisitors(response?.data);
  //       return response.data; // Return the data for further use if needed
  //     } catch (error) {
  //       setLoading(false);
  //       if (axios.isAxiosError(error) && error.response?.status === 404) {
  //         toast.info("Kindly Setup Your Company Info.");
  //         setError(true);
  //       } else {
  //         console.error(`An error occurred: ${error.message}`);
  //         toast.error(`An error occurred: ${error.message}`);
  //       }
  //       // Optionally, handle the error in a way that suits your application
  //       // throw error; // Rethrow the error if you want to handle it later
  //     }
  //   }



  // };


  async function fetchmonthlyvisitors() {

    let accessToken = Cookies.get("access_token");
    if(accessToken){
      try {
        setIsloadingmonthlyvisitors(true);
        const response = await axiosInstance.get("/visitors/monthly/");
        console.log("it rannnn", response.data); // Assuming the response data contains useful 
        setmonthlyvisitors(response?.data);
        setIsloadingmonthlyvisitors(false)
        return response.data; // Return the data for further use if needed
      } catch (error) {
        setIsloadingmonthlyvisitors(false)
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          toast.info("Kindly Setup Your Company Info.");
   
        } else {
          console.error(`An error occurred: ${error.message}`);
          toast.error(`An error occurred: ${error.message}`);
        }
        // Optionally, handle the error in a way that suits your application
        // throw error; // Rethrow the error if you want to handle it later
      }
    }



  };

  useEffect(() => {
    // Filter visitors data into separate variables based on status
    const pendingVisitors = visitors.filter(
      (visitor) => visitor.status == "pending_approval"
    );
    const resheduleVisitors = visitors.filter(
      (visitor) => visitor.status === "reshedule"
    );
    const inProgressVisitors = visitors.filter(
      (visitor) => visitor.status === "inprogress"
    );
    const awaitingvisitors = visitors.filter(
      (visitor) => visitor.status === "awaiting_confirmation"
    );

    setPendingApproval(pendingVisitors);
    setReshedule(resheduleVisitors);
    setInProgress(inProgressVisitors);
    setAwaiting(awaitingvisitors);
    setVisitordataloaded(true);
  }, [visitors]);


  useEffect(() => {
    checkusername();
    fetchuserdata();
    fetchuniquevisitors() ;
  
      // fetchEmployeeData();
    // fetchqrcode();
    // fetchvisitors();
    fetchplans();
    // fetchintegrations()
    // Check if access token exists in local storage
  }, []);
  const datatoken = Cookies.get('userdata_token');

  useEffect(() => {
 
    if (typeof window !== 'undefined' && datatoken) {
      const decodedToken = jwtDecode(datatoken);
      setlogo(decodedToken.data.logo)
      console.log('logosettt')
    }
  }, [datatoken]);


  return (
    <VeeContext.Provider
      value={{
        setIsOverlayOpen,
        setIsSidebarOpen,
        isSidebarOpen,
        isOverlayOpen,
        toggleSidebar,
        setError,
        fetchintegrations,
        userid,
        integrations, 
        setIntegrations,
        companySetup,
        loading,
        error,
        fetchqrcode,
        fetchCompanySetup,
        refreshAccessToken,
        axiosInstance,
        setVisitationdata,
        plans,
        visitordataloaded,
        awaiting,
        pendingApproval,
        reshedule,
        inProgress,
        isOpen,
        test,
        visitors,
        setTest,
        username,
        myqrcode,
        loadingmyqrcode,
        employee,
        employeedataloaded,
        fetchEmployeeData,
        fetchvisitors,
        checkusername,
        logo, 
        setlogo,
        togglevisitorbar,
         isvisitorbaropen,
        setisVistorbaropen,
        sideloading, 
        setsideloading,
        visitationdata,
        acceptvisitor,
        loadingaccept,
        signout,
        Uniquevisitors, 
        setUniquevisitors,
        monthlyvisitors,
        loadingmonthlyvisitors
      }}
    >
      {children}
    </VeeContext.Provider>
  );
};

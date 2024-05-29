// Fetch the data on page load

let staffdata = [];
let employee_data = [];
let visitation_data = [];
// let newvisitation_data = []
let whotosee 
// Fetch the data on page load
let personname = document.getElementById('personname')





// window.onload = function () {
//     console.log('ddd')
//   // Fetch employee phone data
//   fetch("http://ezapi.issl.ng:3333/employeephone", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Range-Unit": "items",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Store the data in the variable staffdata
//       staffdata = data;
//       console.log('staffdata', staffdata); // You can use the data here as needed
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);

//       // Display error message using VanillaToasts
//       VanillaToasts.create({
//         title: "Error!",
//         text: "Error fetching employee phone data. Please try again later.",
//         type: "error",
//         timeout: 3000,
//       });
//     });

//   // Fetch employee data
//   fetch("http://ezapi.issl.ng:3333/employee", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Range-Unit": "items",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Store the data in the variable employeedata
//       employee_data = data;
//       console.log('employee_data', employee_data); // You can use the data here as needed
//       cvcvcv()
//       // Display success message using VanillaToasts
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);

//       // Display error message using VanillaToasts
//       VanillaToasts.create({
//         title: "Error!",
//         text: "Error fetching employee data. Please try again later.",
//         type: "error",
//         timeout: 3000,
//       });
//     });

//   //visitors log

//   fetch("http://ezapi.issl.ng:3333/visitationrequest", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Range-Unit": "items",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Store the data in the variable employeedata
//       visitation_data = data;
//       console.log('visitation_data', visitation_data); // You can use the data here as needed
//       persondata()
//       // displaydashboardtable()
   
  
//       // Display success message using VanillaToasts
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);

//       // Display error message using VanillaToasts
//       VanillaToasts.create({
//         title: "Error!",
//         text: "Error fetching employee data. Please try again later.",
//         type: "error",
//         timeout: 3000,
//       });
//     });


  
// };


function cvcvcv(){
  if (window.location.pathname.endsWith('visitorsform.html') || window.location.pathname.includes('visitorsform')) {
        // Get the URL parameters
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Get the value of the staffid parameter
        const staffId = urlParams.get('staffid');

        // Check if staffId is null or empty
        if (!staffId) {
            // Alert an error
            alert('Error: No staffid found Kindly Restart The Process');
            window.location.href = 'visitorreq.html'
        } else {
            console.log(employee_data)
            const foundstaffdata = employee_data.find(
                (ed) => ed?.staffid == staffId
              );

              console.log(foundstaffdata)
              if (foundstaffdata){
                whotosee = foundstaffdata
                document.getElementById('whotosee').value = whotosee?.firstname + '' + whotosee?.lastname 
              }
            console.log('Staff ID:', staffId);
        }
    }
}

function persondata(){
    if (window.location.pathname.endsWith('success.html')) {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Get the value of the staffid parameter
        const visitors_id = urlParams.get('visitors_id');

        if(!visitors_id){
            alert('Error: No visitorID found Kindly Restart The Process');
            window.location.href = 'visitorreq.html'
        }else {
        //  const vdata =   visitation_data.find((vd) => vd?.id == visitors_id)
        getvisitordatarequest()
 

            }
    }
}persondata()

function phonenuberfetch() {
  console.log("employee data", employee_data);
  const phoneinput = document.getElementById("phone").value;
  const staffname = document.getElementById("fullname");
  const foundstaff = staffdata.find((sd) => sd?.phoneno == phoneinput);
  console.log(foundstaff);
  if (foundstaff) {
    const foundstaffdata = employee_data.find(
      (ed) => ed?.staffid == foundstaff?.staffid
    );
    console.log("employee data", employee_data);
    console.log(foundstaffdata);
    if (foundstaffdata) {
      const confirms = confirm(
        `Kindly confirm that your visitation request is for ${foundstaffdata?.firstname}  ${foundstaffdata?.lastname}`
      );
      if (confirms) {
        staffname.value =
          foundstaffdata?.firstname + " " + foundstaffdata?.lastname;
        document.getElementById("hiddeninput").classList.toggle("hiddeninput");
        window.location.href = `visitorsform.html?staffid=${foundstaffdata.staffid}`;
      } else {
        VanillaToasts.create({
          title: "OOPS!",
          text: "Lets Try That Again.",
          type: "error",
          timeout: 3000,
        });
      }
    } else {
      VanillaToasts.create({
        title: "Error!",
        text: "Error fetching employee data.",
        type: "error",
        timeout: 3000,
      });
    }
  } else {
    VanillaToasts.create({
      title: "Error!",
      text: "Error employee Does Not Exist.",
      type: "error",
      timeout: 3000,
    });
  }
}

async function getvisitordatarequest() {

  // Generate random 12-digit number for ID

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Get the value of the staffid parameter
        const visitors_id = urlParams.get('visitors_id');


  if (visitors_id) {
      try {
          // Define the payload
          const payload = {
            post_id: visitors_id,

          };

          // Define endpoint
          const endpoint = 'https://veezitorbackend.vercel.app/getvisitordetails';

          // Send POST request
          const response = await axios.post(endpoint, payload);
          console.log(response)
          // Check if request was successful
          if (response.status === 200 || response.status === 201) {
              VanillaToasts.create({
                  title: 'Success!',
                  text: response.data.message || 'Bad Request',
                  type: 'success',
                  timeout: 3000
              });

              personname.innerHTML = response?.data?.visitorsdata?.first_name + ' ' +  response?.data?.visitorsdata?.last_name ;
              document.getElementById('visitstatus').innerHTML = response?.data?.visitorsdata?.status
              document.getElementById('host').innerHTML = response?.data?.visitorsdata?.staff_id?.first_name + ' ' + response?.data?.visitorsdata?.staff_id?.last_name
          } else {
              VanillaToasts.create({
                  title: 'Error!',
                  text: 'There was a problem with the request',
                  type: 'error',
                  timeout: 3000
              });
          }
      } catch (error) {
          console.error('There was a problem with the request:', error);
          VanillaToasts.create({
              title: 'Error!',
              text: 'There was a problem with the request',
              type: 'error',
              timeout: 3000
          });
      }

  } else {
      VanillaToasts.create({
          title: 'Error!',
          text: 'No ID Deteted',
          type: 'error',
          timeout: 3000
      });

  }

}


async function sendVisitationRequest() {
  document.getElementById('submitBtn').style.display = 'none';

  // Show the loading spinner
  document.getElementById('loadingBtn').style.display = 'inline-block';
  // Generate random 12-digit number for ID
  const visitorsphnenumber = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const visitortype = document.getElementById('visittype').value;
  const purpose = document.getElementById('purpose').value;

  if (whotosee && visitorsphnenumber && email && visitortype && purpose) {
      try {
          // Define the payload
          const payload = {
              phonenumber: visitorsphnenumber,
              email: email,
              first_name: whotosee.first_name,
              last_name: whotosee.last_name,
              visitation_type: visitortype,
              reason: purpose,
              staff_id: whotosee.staff_id
          };

          // Define endpoint
          const endpoint = 'https://veezitorbackend.vercel.app/visitor';

          // Send POST request
          const response = await axios.post(endpoint, payload);
          console.log(response)
          // Check if request was successful
          if (response.status === 200 || response.status === 201) {
              VanillaToasts.create({
                  title: 'Success!',
                  text: 'Request sent successfully',
                  type: 'success',
                  timeout: 3000
              });
          
              setTimeout(function () {
                  // Redirect to success.html with the random ID as a parameter
                  if(response?.data?.ref){
                    window.location.href = `success.html?visitors_id=${response?.data?.ref}`;
                  }
            
              }, 2000); // 2000 milliseconds = 2 seconds
          } else {
              VanillaToasts.create({
                  title: 'Error!',
                  text: 'There was a problem with the request',
                  type: 'error',
                  timeout: 3000
              });
          }
      } catch (error) {
          console.error('There was a problem with the request:', error);
          VanillaToasts.create({
              title: 'Error!',
              text: 'There was a problem with the request',
              type: 'error',
              timeout: 3000
          });
      }
      hideLoadingSpinner();
  } else {
      VanillaToasts.create({
          title: 'Error!',
          text: 'Kindly Fill All Required Fields',
          type: 'error',
          timeout: 3000
      });
      hideLoadingSpinner();
  }

}

function hideLoadingSpinner() {
  document.getElementById('submitBtn').style.display = 'block';
  document.getElementById('loadingBtn').style.display = 'none';
}

  async function searchEmployeeByPhoneNumber(phoneNumber) {
    try {
        const response = await axios.get(`https://veezitorbackend.vercel.app/phonesearch?phone_number=${phoneNumber}`);

        if (response.status == 404) {
            throw new Error(response.data.error || 'Bad Request');
        } else if (!response.status === 200) {
            throw new Error('Network response was not ok');
        }

        // Check if data contains an error
        if (response.data.error) {
            console.error('Error:', response.data.error);
            return { error: response.data.error }; // Return the error message
        } else {
            console.log('Employee Data:', response.data);
            return response.data; // Return the employee data
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle network error or other exceptions here
        return { error: error?.response?.data?.error || 'There was a problem with the request' }; // Return the error message
    }
}


  // function displayemployee() {
  //   if (
  //     window.location.pathname.endsWith("visitorreq.html") ||
  //     window.location.pathname.endsWith("visitorreq")
  //   ) {
  //     fetch("https://veezitorbackend.vercel.app/employee")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         VanillaToasts.create({
  //           title: "Success!",
  //           text: "Request sent successfully",
  //           type: "success",
  //           timeout: 3000,
  //         });
  //         console.log("GET Success:", data);
  //         let myemployeearray = [];
  //         myemployeearray = data;
  //         document.getElementById("employeecount").innerHTML =
  //           myemployeearray.length;
  //         createDivBlock(data);
  //       })
  //       .catch((error) => {
  //         console.error("GET Error:", error);
  //         // Handle GET request error here
  //       });
  //   }
  // }
  // displayemployee();

  
  // Example usage:
 // Replace with the actual phone number you want to search for

 function hideLoadingSpinner() {
  document.getElementById('submitBtn').style.display = 'flex';
  document.getElementById('loadingBtn').style.display = 'none';
}

const inputss = document.querySelector("#phone");
var iti = intlTelInput(inputss, {
  initialCountry: "gb",
  separateDialCode: true,
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.4/build/js/utils.js",
});


function checkphonenumber(){

  var num = iti.getNumber()
  console.log(num)
  const staffname = document.getElementById("fullname");
  const phoneNumber = document.getElementById('phone').value;
  if(num){
    document.getElementById('submitBtn').style.display = 'none';

    // Show the loading spinner
    document.getElementById('loadingBtn').style.display = 'inline-block';

    searchEmployeeByPhoneNumber(phoneNumber)

    .then(result => {
    
      if (result.error) {
        // Handle error
        VanillaToasts.create({
          title: 'Error!',
          text: result.error,
          type: 'error',
          timeout: 4000
        });
      } else {
        // Handle successful response
        const confirms = confirm(
          `Kindly confirm that your visitation request is for ${result?.first_name}  ${result?.last_name}`
        );
        if (confirms) {
          staffname.value =
          result?.first_name + " " + result?.last_name;
          document.getElementById("hiddeninput").classList.toggle("hiddeninput");
          VanillaToasts.create({
            title: 'Success!',
            text: 'Employee founds successfully',
            type: 'success',
            timeout: 3000
          });
          window.location.href = `visitorsform.html?staffid=${result.phone_number}`;
        } else {
          VanillaToasts.create({
            title: "OOPS!",
            text: "Lets Try That Again.",
            type: "error",
            timeout: 3000,
          });
        }

console.log(result)

      }
      hideLoadingSpinner()
    });
  }
  else{
    VanillaToasts.create({
      title: 'Note!',
      text:  'Fields Are Required' ,
      type: 'info',
      timeout: 3000
  });
    hideLoadingSpinner()
  }
}


















function cvcvcv(){
  if (window.location.pathname.endsWith('visitorsform.html')) {
      // Get the URL parameters
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      // Get the value of the staffid parameter
      const staffId = urlParams.get('staffid');

      // Check if staffId is null or empty
      if (!staffId) {
          // Alert an error
          alert('Error: No staffid found Kindly Restart The Process');
          window.location.href = 'visitorreq.html'
      } else {
   
     
          searchEmployeeByPhoneNumber(staffId)
          .then(result => {
            if (result.error) {
              // Handle error
              VanillaToasts.create({
                title: 'Error!',
                text: result.error,
                type: 'error',
                timeout: 4000
              });
            } else {
              // Handle successful response
              document.getElementById('whotosee').value = result?.first_name + ' ' + result?.last_name 
              document.getElementById('staff_id').value = result?.staff_id
      console.log(result)
      whotosee = result
      
            }
          });
        


            // console.log(foundstaffdata)
            // if (foundstaffdata){
            //   whotosee = foundstaffdata
            //   document.getElementById('whotosee').value = whotosee?.firstname + '' + whotosee?.lastname 
            // }
   
      }
  }
} cvcvcv()
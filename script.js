document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      // Remove 'active' class from all tags and content
      tags.forEach((tag) => {
        tag.classList.remove("active");
      });

      document.querySelectorAll(".content").forEach((content) => {
        content.classList.remove("active");
      });

      // Add 'active' class to the clicked tag and content
      this.classList.add("active");
      targetContent.classList.add("active");
    });
  });
});

function updateIconBasedOnTime() {
  // Check if the div exists

  var iconSpan = document.getElementById("todIcon");
  if (iconSpan) {
    // Get the current hour
    var currentHour = new Date().getHours();

    // Set the icon based on the time of day
    if (currentHour >= 6 && currentHour < 18) {
      // Daytime icon (e.g., sun)
      iconSpan.innerHTML = "☀️";
    } else {
      // Nighttime icon (e.g., moon)
      iconSpan.innerHTML = "🌙";
    }
  }
}
updateIconBasedOnTime();

var employees_data = [
  {
    name: "Tanner Fisher",
    email: "Tannerfisher@gmail.com",
    employee_np: 1036650362,
    role: "Product Designer",
    status: "actives",
  },
  {
    name: "Emma Smith",
    email: "emmasmith@example.com",
    employee_np: 2037750498,
    role: "Software Engineer",
    status: "actives",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    employee_np: 3058840563,
    role: "Marketing Specialist",
    status: "inactive",
  },
  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    employee_np: 4079930634,
    role: "Data Analyst",
    status: "actives",
  },
  {
    name: "Michael Lee",
    email: "michaellee@example.com",
    employee_np: 5091020705,
    role: "HR Manager",
    status: "actives",
  },
  {
    name: "Sarah Miller",
    email: "sarahmiller@example.com",
    employee_np: 6102110876,
    role: "Product Manager",
    status: "actives",
  },
  {
    name: "Emma Smith",
    email: "emmasmith@example.com",
    employee_np: 2037750498,
    role: "Software Engineer",
    status: "actives",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    employee_np: 3058840563,
    role: "Marketing Specialist",
    status: "inactive",
  },
  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    employee_np: 4079930634,
    role: "Data Analyst",
    status: "actives",
  },
  {
    name: "Emma Smith",
    email: "emmasmith@example.com",
    employee_np: 2037750498,
    role: "Software Engineer",
    status: "actives",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    employee_np: 3058840563,
    role: "Marketing Specialist",
    status: "inactive",
  },
  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    employee_np: 4079930634,
    role: "Data Analyst",
    status: "actives",
  },
];

// Get the div where employee information will be displayed
var employeeListDiv = document.getElementById("employeeList");

// Map through the employee data array and create HTML for each employee
var employeeHtml = employees_data.map(function (employee) {
  return `
    <div class="tabledata"   onclick="showsides()">
                        <!-- <div class="acc initials">
                     
                            

                        </div> -->
                        <div class="acc">
                            <div class="accflx">
                                <div class="init">
                                    OV
                                </div>
                                <div class="accnames">
<div class="name"> ${employee.name}   </div>
                                </div>
                            </div>
                          
                              

                            

      
                        </div>

                        <div class="acc     ">
                            <div class="email">${employee.email} </div>
                          
                              

                            

      
                        </div>
                        <div class="acc initialize ">
                            <div class="eid">${employee.employee_np}</div>
                            </div>
                        <div class="acc initialize">
                            Product Designer
                     

                        </div>
                        <div class="acc initialize " >
                        <div class="${employee.status}">
                        
                        ${employee.status}
                        </div>
                        </div>
              
                        <div class="acc initials">
                                 
                            <span class="material-symbols-outlined">
                                more_vert
                                </span>
          
                        </div>
                      </div>
    `;
});

// Join the HTML for all employees and insert it into the employeeListDiv

if (employeeListDiv) {
  employeeListDiv.innerHTML = employeeHtml.join("");
}

function navtoggle() {
  document.getElementById("sidebar").classList.toggle("sidebarshow");

  myovl();
}

function myovl() {
  var overlay = document.getElementById("ovl");

  if (overlay.style.display === "flex") {
    overlay.style.display = "none";
    const b = document.getElementById("sides");
    if (b && b.classList.contains("open")) {
      b.classList.remove("open");
    }
  } else {
    overlay.style.display = "flex";
  }
}

function showsides() {
  const b = document.getElementById("sides");

  b.classList.toggle("open");
  document.body.classList.toggle("ovh");
  myovl();
}

function dropdown() {
  var dropdownContent = document.getElementById("ddown");
  dropdownContent.classList.toggle("dropdownshow");

  // Calculate the height of the dropdown content based on its actual content
  if (dropdownContent.classList.contains("dropdownshow")) {
    dropdownContent.style.height = dropdownContent.scrollHeight + "px";
  } else {
    dropdownContent.style.height = "0px";
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.querySelector(".eye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.textContent = "visibility_off"; // Change the icon to hide visibility
  } else {
    passwordInput.type = "password";
    eyeIcon.textContent = "visibility"; // Change the icon to show visibility
  }
}

// function submitLogin() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   // const spinner = document.getElementById('spinner');

//   const correctemail = "odahviktor@gmail.com";
//   const correctpassword = "test123!";

//   if ((email == correctemail) & (password == correctpassword)) {
//     window.location.href = "dashboard.html";
//   } else {
//     // showpopup(
//     //   (text = "Incorrect username or password"),
//     //   (icon = "failed"),
//     //   (type = "failed")
//     // );
//   }
// }


function submitLogin() {
  // Disable the submit button to prevent double submission


  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (username && password){
    login(username, password);
    document.getElementById('submitBtn').style.display = 'none';

// Show the loading spinner
document.getElementById('loadingBtn').style.display = 'inline-block';
  } else{
    VanillaToasts.create({
      title: 'Note!',
      text:  'Fields Are Required' ,
      type: 'info',
      timeout: 3000
  });
  }

}


function login(username, password) {
  const url = 'https://veezitorbackend.vercel.app/token/';

  const data = {
      username: username,
      password: password
  };

  // Show loading spinner
  document.getElementById('submitBtn').style.display = 'none';
  document.getElementById('loadingBtn').style.display = 'block';

  axios.post(url, data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      // Successful login
      VanillaToasts.create({
          title: 'Success!',
          text: 'Login successfully',
          type: 'success',
          timeout: 3000
      });

      // Save access and refresh tokens to localStorage
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setTimeout(function() {
          window.location.href = `index.html`;
      }, 2000);

      const token = response.data.access;
      const arrayToken = token.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      console.log(tokenPayload);

      // Hide loading spinner and enable submit button
      hideLoadingSpinner();
  })
  .catch(error => {
      // Failed login
      VanillaToasts.create({
          title: 'Error!',
          text: error.response ? error.response.data.message || 'Invalid Username or Password' : 'Failed to connect to server',
          type: 'error',
          timeout: 5000
      });

      // Hide loading spinner and enable submit button
      hideLoadingSpinner();
  });
}

function hideLoadingSpinner() {
  document.getElementById('submitBtn').style.display = 'block';
  document.getElementById('loadingBtn').style.display = 'none';
}



function showpopup(text, icon, type) {
  const popup = `

  <div class="loading-over2" style="display: block;">
  <div class="popup">
      <br>
  <div class="secoact">
  <div class="logoac">
  <ion-icon name="alert-outline"></ion-icon>
  </div>


  <div class="logomen"> ${text} </div>


  <div class="logobod">

  Incorrect username or password. Please make sure you've entered them correctly. 

  </div>

  </div>
  </div>
  </div>
  `;
  if ((type = "failed")) {
    document.body.innerHTML += popup;
  }
}

function hidepopup() {
  const elements = document.getElementsByClassName("loading-over2");
  while (elements.length > 0) {
    elements[0].remove();
  }
}

const visitingform = `
<div class="loading-over2" style="display: flex;">
<div class="floatingform">
    <div class="sectiontitle col">
                        
        <div class='jc'>Visitation  Form     <span id="closex"  onclick="hidepopup()"><ion-icon name="close-circle-outline"></ion-icon></span></div>   
           <small> Fill the details below to log your appointment </small>
       </div>

<div class="loginside mylside">


    <div class="loginfrm">
        <label for="fullname">Visitors full name   </label>
        <div class="inp">
            <span class="material-symbols-outlined">person</span>
            <input type="text" id="fullname" name="fullname">
        </div>
    </div>
    
    <div class="loginfrm">
        <label for="phone">Phone number</label>
        <div class="inp">
            <span class="material-symbols-outlined">phone</span>
            <input type="tel" id="phone" name="phone">
        </div>
    </div>
    
    <div class="loginfrm">
        <label for="email">Email address</label>
        <div class="inp">
            <span class="material-symbols-outlined">mail</span>
            <input type="email" id="email" name="email">
        </div>
    </div>
    
    <div class="loginfrm">
        <label for="visitortype">Visitor type</label>
        <div class="inp">
            <span class="material-symbols-outlined">person</span>
    <select name="" id="">
        <option value="">Vendor</option>
        <option value="">Visitor</option>
    </select>
        </div>
    </div>
    
    <div class="loginfrm">
        <label for="whotosee">Who to see</label>
        <div class="inp">
            <span class="material-symbols-outlined">person</span>
            <input type="text" id="whotosee" name="whotosee">
        </div>
    </div>
    
    <div class="loginfrm">
        <label for="purpose">Purpose for visit</label>
        <div class="inp">
            <span class="material-symbols-outlined">chat</span>
            <input type="text" id="purpose" name="purpose">
        </div>
    </div>
    
    <div class="loginfrm">
        <label for="note">Private note</label>
        <div class="inp">
            <textarea id="note" name="note"></textarea>
        </div>


       
    </div>

</div>
<div class="loginfrm">
<button onclick="login()">Submit</button>
</div>
</div>
</div>
`;

function visitorsform() {
  console.log("ssss");
  document.body.innerHTML += visitingform;
}

const empform = `
<div class="loading-over2" style="display: flex;">
<div class="floatingform">
    <div class="sectiontitle col">
                        
        <div class='jc'>New Employee     <span id="closex"  onclick="hidepopup()"><ion-icon name="close-circle-outline"></ion-icon></span></div>   
           <small> Fill The Below Details To Register An Employee </small>
       </div>

       <div class="loginside mylss mylside">
        <div class="loginfrm">
            <label for="firstname">First Name</label>
            <div class="inp">
                <span class="material-symbols-outlined">person</span>
                <input type="text" id="firstname" name="firstname">
            </div>
        </div>
    
        <div class="loginfrm">
            <label for="lastname">Last Name</label>
            <div class="inp">
                <span class="material-symbols-outlined">person</span>
                <input type="text" id="lastname" name="lastname">
            </div>
        </div>
    
        <div class="loginfrm">
            <label for="email">Email address</label>
            <div class="inp">
                <span class="material-symbols-outlined">mail</span>
                <input type="email" id="email" name="email">
            </div>
        </div>
    
        <div class="loginfrm">
            <label for="middlename">Middle Name</label>
            <div class="inp">
                <span class="material-symbols-outlined">person</span>
                <input type="text" id="middlename" name="middlename">
            </div>
        </div>
    
        <div class="loginfrm">
            <label for="phonenumber">Phone number</label>
            <div class="inp">
                <span class="material-symbols-outlined">phone</span>
                <input type="tel" id="phonenumber" name="phonenumber">
            </div>
        </div>
    
        <div class="loginfrm">
            <label for="gender">Gender</label>
            <div class="inp">
                <span class="material-symbols-outlined">person</span>
                <select id="gender" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="loginfrm">
        <button onclick="newEmployee()">Submit</button>
    </div>
    
</div>
</div>
`;

function employeeform() {
  console.log("ssss");
  document.body.innerHTML += empform;
}

function newEmployee() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const middleName = document.getElementById("middlename").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const gender = document.getElementById("gender").value;

  if (firstName && lastName && email && middleName && phoneNumber && gender) {
    const postData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      middle_name: middleName,
      phone_number: phoneNumber,
      gender: gender,
    };

    fetch("https://veezitorbackend.vercel.app/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.status === 400) {
          return response.json().then((data) => {
            throw new Error(data.error || "Bad Request");
          });
        } else if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle success
        VanillaToasts.create({
          title: "Success!",
          text: "Request sent successfully",
          type: "success",
          timeout: 3000,
        });
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
        VanillaToasts.create({
          title: "Error!",
          text: error.message || "There was a problem with the request",
          type: "error",
          timeout: 4000,
        });
      });
  } else {
    VanillaToasts.create({
      title: "Error!",
      text: "All Fields Are Required",
      type: "error",
      timeout: 3000,
    });
  }
}

function displayemployee() {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    fetch("https://veezitorbackend.vercel.app/employee")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        VanillaToasts.create({
          title: "Success!",
          text: "Request sent successfully",
          type: "success",
          timeout: 3000,
        });
        console.log("GET Success:", data);
        let myemployeearray = [];
        myemployeearray = data;
        document.getElementById("employeecount").innerHTML =
          myemployeearray.length;
        createDivBlock(data);
      })
      .catch((error) => {
        console.error("GET Error:", error);
        // Handle GET request error here
      });
  }
}
displayemployee();

function createDivBlock(data) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("ttable");

  const mydatadiv = document.getElementById("employeeLists");

  if (data.length >= 1) {
    data.forEach((item) => {
      const divBlock = `
    
    <div class="tabledata" >
        <div class="acc">
            <div class="accflx">
                <div class="init">${item.first_name.charAt(
                  0
                )}${item.last_name.charAt(0)}</div>
                <div class="accnames">
                    <div class="name">${item.first_name} ${item.last_name}</div>
                </div>
            </div>
        </div>
        <div class="acc">${item.email}</div>
        <div class="acc initialize ">
                          <div class="eid">${item.staff_id}</div>
                          </div>
        
        <div class="acc initialize" >${item.phone_number}</div>
        <div class="acc initialize">${item.gender}</div>
        </div>
    `;

      divContainer.innerHTML += divBlock;
    });

    mydatadiv.appendChild(divContainer);
  } else {
    mydatadiv.innerHTML = `
  <div class="tabledata" id="tableusers">
    <div class="acc nodata">
       

        <img src="img/Group 26780.png" alt="">

        <h5 class="sectiontitle" style="font-size:20px ;">No Employees</h5>
    </div>
   </div>
  `;
  }
  // Append the div container to the body or another container
}

// Call the function with the responseData

function qrcodes() {
  if (
    window.location.pathname.endsWith("qrcodes.html") ||
    window.location.pathname.endsWith("qrcodes")
  ) {
    axios
      .get("https://veezitorbackend.vercel.app/userqrcards")
      .then((response) => {
        // Handle successful response
        console.log("Response:", response.data);
        generateqrcodes(response?.data?.qrcards)
        // Process the response data as needed
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
        VanillaToasts.create({
          title: "Error!",
          text: error.message || "There was a problem with the request",
          type: "error",
          timeout: 4000,
        });
      });
  }
}
qrcodes();

function generateqrcodes(data) {
  const mydiv = document.getElementById('tagsgrid');
  let divstatus
  if (data) {
//     if (item.availability):
//     divstatus = `<div class="mybtnone">
//     <span class="material-symbols-outlined">lock</span>
//     Available
// </div>`
    data.forEach((item) => {

      const twobtn = document.createElement("div");
      twobtn.innerHTML = `
        <div class="iddata">
          <span>#${item.code_tag}</span>  
          <div class="twobtn">
          ${item.availability ? (
         `   <div class="mybtnone">
                <span class="material-symbols-outlined">lock_open</span>
                Available
            </div> `
        ) : (
          `  <div class="mybtnone unavailable">
                <span class="material-symbols-outlined">lock</span>
                Unavailable
            </div> `
        )}
   
            <div class="mybtntwo"><span class="material-symbols-outlined">download</span> Download</div>
          </div>
        </div>
      `;
      // Create a div element for each QR code
      const divContainer = document.createElement("div");
      divContainer.className = "qr-code-container"; // Add a class name to the div
      
      // Create the QR code using QRCodeStyling
      const qrCode =
       new QRCodeStyling({
        width: 300,
        height: 200,
        data: item?.code_tag,
        margin: 0,
        qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
        imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
        dotsOptions: { type: "extra-rounded", color: "#9a4c1e" },
        backgroundOptions: { color: "#ffffff" },
        image: "InvestmentOneLogo.png",
        dotsOptionsHelper: {
          colorType: { single: true, gradient: false },
          gradient: {
            linear: true,
            radial: false,
            color1: "#6a1a4c",
            color2: "#6a1a4c",
            rotation: "0",
          },
        },
        cornersSquareOptions: { type: "extra-rounded", color: "#6a1039" },
        cornersSquareOptionsHelper: {
          colorType: { single: true, gradient: false },
          gradient: {
            linear: true,
            radial: false,
            color1: "#000000",
            color2: "#000000",
            rotation: "0",
          },
        },
        cornersDotOptions: { type: "", color: "#6a1039" },
        cornersDotOptionsHelper: {
          colorType: { single: true, gradient: false },
          gradient: {
            linear: true,
            radial: false,
            color1: "#000000",
            color2: "#000000",
            rotation: "0",
          },
        },
        backgroundOptionsHelper: {
          colorType: { single: true, gradient: false },
          gradient: {
            linear: true,
            radial: false,
            color1: "#ffffff",
            color2: "#ffffff",
            rotation: "0",
          },
        },
      });
      
      // Append the QR code to the div container
      qrCode.append(divContainer);
      divContainer.appendChild(twobtn);
      
      // Append the div container to the main container
      mydiv.appendChild(divContainer);
    });
  }
}


// Axios instance with interceptor
const axiosInstance = axios.create({
  baseURL: 'https://veezitorbackend.vercel.app/', // Update base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      throw new Error('Refresh token not found');
    }
    const response = await axios.post('https://veezitorbackend.vercel.app/api/token/refresh/', { refresh: refreshToken });
    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;
    localStorage.setItem('access_token', newAccessToken); // Save new access token
    localStorage.setItem('refresh_token', newRefreshToken); // Save new refresh token
    console.log('token refreshed')
    return newAccessToken; // Return the new access token
  } catch (error) {
    throw new Error('Failed to refresh access token');
  }
}

// Request interceptor
axiosInstance.interceptors.request.use(
  async config => {
    const access = localStorage.getItem('access_token');
    if (access) {
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const isExpired = Math.floor(new Date().getTime() / 1000) >= tokenPayload.exp;
      if (isExpired) {
        try {
          const newAccessToken = await refreshAccessToken();
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return config;
        } catch (error) {
          console.error('Failed to refresh access token:', error);
          VanillaToasts.create({
            title: 'Error!',
            text:  'Session Expired' ,
            type: 'error',
            timeout: 5000
        });
        
        setTimeout(function() {
          // Redirect to success.html with the random ID as a parameter
          window.location.href = `login.html`;
        }, 2000); // 2000 milliseconds = 2 seconds
          return Promise.reject(new Error('Failed to refresh access token'));
        }
      } else {
        config.headers.Authorization = `Bearer ${access}`;
      }
    } else {
      // Access token not found, handle redirect to login or show error message
      console.log("Access token not found");
      // Example: Redirect to login page
      // window.location.href = '/login';
      VanillaToasts.create({
        title: 'Error!',
        text:  'Session Expired' ,
        type: 'error',
        timeout: 5000
    });
    
    setTimeout(function() {
      // Redirect to success.html with the random ID as a parameter
      window.location.href = `login.html`;
    }, 2000); // 2000 milliseconds = 2 seconds
      return Promise.reject(new Error('Access token not found'));
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  }
);


// let staffdata = [];
// let employee_data = [];
// let visitation_data = [];
let newvisitation_data = []
function fetchnewisitationdata(){
  if (window.location.pathname.endsWith('dashboard.html') || window.location.pathname.includes('dashboard'))  {


  fetch('https://veezitorbackend.vercel.app/visitor')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
    VanillaToasts.create({
      title: 'Success!',
      text: 'Request Fetched successfully',
      type: 'success',
      timeout: 3000
  });
      console.log('GET Success:', data); 
      newvisitation_data = data
      console.log(newvisitation_data)
      displaydashboardtable()
      displaypending()
      displayinprogress()
  })
  .catch(error => {
      console.error('GET Error:', error);
      VanillaToasts.create({
        title: 'Error!',
        text: 'Network response was not ok',
        type: 'error',
        timeout: 3000
    });
      // Handle GET request error here
  });


}
}fetchnewisitationdata()

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}


function displaydashboardtable(){


  if (window.location.pathname.endsWith('dashboard.html') || window.location.pathname.includes('dashboard')){
      const awaitingconfiormation = newvisitation_data?.filter(state => state.status == 'awaiting_confirmation');

      const confirm = document.getElementById('confirm')
      confirm.innerHTML = awaitingconfiormation.length


      const mydiv = awaitingconfiormation.map(function(info) {
          return `
          <div class="tabledata" onclick="showsides(${info?.ref}) ; loadsidedata(${info?.ref}); ">
              <div class="acc">
                  <div class="accflx">
                      <div class="init">${info.first_name.charAt(
                        0
                      )}${info.last_name.charAt(0)}</div>
                      <div class="accnames">
                          <div class="name">${info?.first_name} ${info?.last_name}</div>
                      </div>
                  </div>
              </div>
              
              <div class="acc">
                  <div class="email">${info?.email}</div>
              </div>
              
              <div class="acc initialize">
                  <div class="eid">${info?.phonenumber}</div>
              </div>
              
              <div class="acc initialize"> ${info.staff_id?.first_name}  ${info.staff_id?.last_name}</div>
              <div class="acc initialize">
                  <div class="pending ${info?.status}"><span class="material-symbols-outlined">
                  pending_actions
                  </span> Confirmation</div>
              </div>
              
              <div class="acc initialize"> ${formatDate(info?.clock_in)} </div>
          </div>`;
      });
      if (awaitingconfiormation.length > 0) {
      const id = document.getElementById('displaydatahere');
      id.innerHTML = mydiv.join("");
      console.log(newvisitation_data.length);

  } else {
      const id = document.getElementById('displaydatahere');
      id.innerHTML = `
      <div class="tabledata" >
          <div class="acc nodata">
              <img src="img/Group 26780.png" alt="">
              <h5 class="sectiontitle" style="font-size: 20px">
                  No Pending Confirmations
              </h5>
          </div>
      </div>`;
  }

 
}} 

function displayinprogress(){


  if (window.location.pathname.endsWith('dashboard.html') || window.location.pathname.includes('dashboard')){
      const inprogress = newvisitation_data?.filter(state => state.status == 'inprogress');

    console.log(inprogress)


      const mydiv = inprogress.map(function(info) {
          return `
          <div class="tabledata" onclick="showsides(${info?.ref}) ; loadsidedata(${info?.ref}); ">
              <div class="acc">
                  <div class="accflx">
                      <div class="init">${info.first_name.charAt(
                        0
                      )}${info.last_name.charAt(0)}</div>
                      <div class="accnames">
                          <div class="name">${info?.first_name} ${info?.last_name}</div>
                      </div>
                  </div>
              </div>
              
              <div class="acc">
                  <div class="email">${info?.email}</div>
              </div>
              
              <div class="acc initialize">
                  <div class="eid">${info?.phonenumber}</div>
              </div>
              
              <div class="acc initialize"> ${info.staff_id?.first_name}  ${info.staff_id?.last_name}</div>
              <div class="acc initialize">
                  <div class="pending ${info?.status}"><span class="material-symbols-outlined">
                  pending_actions
                  </span> Confirmation</div>
              </div>
              
              <div class="acc initialize"> ${formatDate(info?.clock_in)} </div>
          </div>`;
      });
      if (inprogress.length > 0) {
      const id = document.getElementById('displayinprogress');
      id.innerHTML = mydiv.join("");
      console.log(inprogress.length);

  } else {
      const id = document.getElementById('displayinprogress');
      id.innerHTML = `
      <div class="tabledata" >
          <div class="acc nodata">
              <img src="img/Group 26780.png" alt="">
              <h5 class="sectiontitle" style="font-size: 20px">
                  No Pending Confirmations
              </h5>
          </div>
      </div>`;
  }

 
}} 



function displaypending() {
  if (window.location.pathname.endsWith('dashboard.html') || window.location.pathname.includes('dashboard'))  {

        let find = []
       find = newvisitation_data?.filter(state => state.status == 'pending_approval');

       const pending_approval = document.getElementById('pending')
       pending_approval.innerHTML = find.length

      if (find.length > 0) {
          console.log(find);
          const body = find.map(function(info) {
              return `
              <div class="tabledata" onclick="showsides(${info?.ref}) ; loadsidedata(${info?.ref}); ">
                  <div class="acc">
                      <div class="accflx">
                          <div class="init">${info.first_name.charAt(
                            0
                          )}${info.last_name.charAt(0)}</div>
                          <div class="accnames">
                              <div class="name">${info?.first_name} ${info?.last_name}</div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="acc">
                      <div class="email">${info?.email}</div>
                  </div>
                  
                  <div class="acc initialize">
                      <div class="eid">${info?.phonenumber}</div>
                  </div>
                  
                  <div class="acc initialize">${info?.staff_id?.first_name} ${info?.staff_id?.last_name}</div>
                  
                  <div class="acc initialize">
                      <div class="pending"><span class="material-symbols-outlined">
                      priority_high
                      </span> Pending</div>
                  </div>
                  
                  <div class="acc initialize"> ${formatDate(info?.clock_in)}</div>
              </div>`;
          });

          const show = body.join("");
          const found = document.getElementById('displaynonpending');
          found.innerHTML = show;

          const pending = document.getElementById('pending');
          pending.innerHTML = find.length;
      } else {
          const found = document.getElementById('displaynonpending');
          found.innerHTML = `
          <div class="tabledata">
              <div class="acc nodata">
                  <img src="img/Group 26780.png" alt="" />
                  <h5 class="sectiontitle" style="font-size: 20px">
                      No Pending Approvals
                  </h5>
              </div>
          </div>`;
          
          const pending = document.getElementById('pending');
          pending.innerHTML = find.length
         }
  }
}

function search() {
  const searchInput = document.getElementById('searchinput').value

  let filtereddata = newvisitation_data.filter(
      user => user.visitorname.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  if (filtereddata.length > 0) {
    const mydiv = filtereddata.map(function(info) {
        return `
        <div class="tabledata" onclick="showsides(${info?.ref}) ; loadsidedata(${info?.ref}); ">
              <div class="acc">
                  <div class="accflx">
                      <div class="init">${info.first_name.charAt(
                        0
                      )}${info.last_name.charAt(0)}</div>
                      <div class="accnames">
                          <div class="name">${info?.first_name} ${info?.last_name}</div>
                      </div>
                  </div>
              </div>
              
              <div class="acc">
                  <div class="email">${info?.email}</div>
              </div>
              
              <div class="acc initialize">
                  <div class="eid">${info?.phonenumber}</div>
              </div>
              
              <div class="acc initialize"> ${info?.staff_id.first_name}  ${info?.staff_id.last_name} </div>
              <div class="acc initialize">
                  <div class="pending">${info?.status}</div>
              </div>
              
              <div class="acc initials">${info?.clock_in}</div>
          </div>`;
    });


    const id = document.getElementById('displaydatahere');
    id.innerHTML = mydiv.join("");
} else {
  const id = document.getElementById('displaydatahere');
    id.innerHTML = `
    <div class="tabledata">
        <div class="acc nodata">
            <img src="img/Group 26780.png" alt="">
            <h5 class="sectiontitle" style="font-size: 20px">
                No Matching Results
            </h5>
        </div>
    </div>`;
}

} 


function pending() {
  const searchInput = document.getElementById('input').value
  let find = []
 find = newvisitation_data?.filter(state =>  state.status == 'pending_approval')

if(find.length > 0){
  let filtereddata = find?.filter(
    user => user.visitorname.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
);

if (filtereddata.length > 0) {
  const mydiv = filtereddata.map(function(info) {
      return `
      <div class="tabledata" onclick="showsides(${info?.ref}) ; loadsidedata(${info?.ref}); ">
            <div class="acc">
                <div class="accflx">
                    <div class="init">${info.first_name.charAt(
                      0
                    )}${info.last_name.charAt(0)}</div>
                    <div class="accnames">
                        <div class="name">${info?.first_name} ${info?.last_name}</div>
                    </div>
                </div>
            </div>
            
            <div class="acc">
                <div class="email">${info?.email}</div>
            </div>
            
            <div class="acc initialize">
                <div class="eid">${info?.phonenumber}</div>
            </div>
            
            <div class="acc initialize"> ${info?.staff_id.first_name} ${info?.staff_id.last_name}</div>
            <div class="acc initialize">
                <div class="pending">${info?.status}</div>
            </div>
            
            <div class="acc initials">${info?.clock_in}</div>
        </div>`;
  });


  const id = document.getElementById('displaynonpending');
  id.innerHTML = mydiv.join("");
} else {
const id = document.getElementById('displaynonpending');
  id.innerHTML = `
  <div class="tabledata">
      <div class="acc nodata">
          <img src="img/Group 26780.png" alt="">
          <h5 class="sectiontitle" style="font-size: 20px">
              No Matching Results
          </h5>
      </div>
  </div>`;
}
}


} 

let selectedid = ''

async function approve(id) {
  const statusblock = document.getElementById('statusbtn')
  const loadingbtn = `
  <div class="loginfrm">
    
  <button id="loadingBtn" style="display: flex;" disabled><i class="fa fa-spinner fa-spin"></i> Loading</button>
</div>
  `
  if(id){
    const payload = {
      "post_id": id
  }
  statusblock.innerHTML = loadingbtn
    try {
      const response = await axiosInstance.post(`/acceptvisitor`, payload)
      console.log(response.data); // Assuming the response data contains useful information
      VanillaToasts.create({
        title: 'Success',
        text: response?.data?.message || 'Success',
        type: 'success',
        timeout: 5000
      });
      
      newvisitation_data = response?.data?.visitorsdata
      // console.log(newvisitation_data)
      displaydashboardtable()
      displaypending()
      displayinprogress()
      loadsidedata(id)
  
    } catch (error) {
      console.error(error.message);
      VanillaToasts.create({
        title: 'Error!',
        text: error.message || 'An Error Occurred',
        type: 'error',
        timeout: 5000
      });
      loadsidedata(id)
    }
  
  }
else{
  VanillaToasts.create({
    title: 'Error!',
    text:  'An Error Occurred',
    type: 'error',
    timeout: 5000
  });
  loadsidedata(id) 
}
   
}

function loadsidedata(id){
  const statusblock = document.getElementById('statusbtn')
  const bflex = document.getElementById('bflx')
  console.log(id)
   const gottendata = newvisitation_data.find((ref =>  ref.ref == id)) 
   if(gottendata){

    const btnone = `<div class="assigntag grn">
    <button onclick="scanqr(${gottendata?.ref})">
      <span class="material-symbols-outlined">
        qr_code_scanner
        </span>
      Assign Tag</button>
  </div>`
  
  const btntwo = `
  <div class="assigntag grn gry">
    <button onclick="approve(${gottendata?.ref})">
      <span class="material-symbols-outlined">
      verified
      </span>  Approve</button>
  </div>
  `

  const progress = `
  <div class="bflex">
   <div class="bftag">
      <div class="bficon">
         <!-- <div class="ch"><span class="material-symbols-outlined">
            done
            </span></div> -->

            
         <img src="img/Group 427318817.png" alt="">
      
         </div>
      <div class="bftext">Visitation Request
         <small>${formatDate(gottendata?.clock_in)}</small>
      </div>
   </div>
   <div class="bftag">
      <div class="bficon pi" >
         <span class="material-symbols-outlined">
         more_vert
         </span>
      </div>
   </div>
   <div class="bftags">
      <div class="bftag">
         <div class="bficon">
         ${gottendata?.status === 'awaiting_confirmation' ? '<img src="img/Group 427318817 (1).png" alt="">' : '<img src="img/Group 427318817.png" alt="">'}
            
         </div>
         <div class="bftext">Awaiting Confirmation
            <small>March 20, 2023</small>
         </div>
      </div>
      ${gottendata?.status === 'awaiting_confirmation' ? '<div class="actives pnd">Under Review</div>' : ''}
     
   </div>
   
   <div class="bftag">
      <div class="bficon pi" >
         <span class="material-symbols-outlined">
         more_vert
         </span>
      </div>
   </div>
   <div class="bftag">
      <div class="bficon">
      ${gottendata?.status === 'inprogress' || gottendata?.status === 'completed' ? '<img src="img/Group 427318817.png" alt=""> ' : '<img src="img/Group 427318817 (1).png" alt="">'}
      </div>
      <div class="bftext incomplete">Assign Tag
         <small>-</small>
      </div>
      
   </div>

   <div class="bftag">
      <div class="bficon pi" >
         <span class="material-symbols-outlined">
         more_vert
         </span>
      </div>
   </div>
   <div class="bftag">
      <div class="bficon">
      ${gottendata?.status === 'completed' ? '<img src="img/Group 427318817.png" alt="">' : '<img src="img/Group 427318817 (1).png" alt="">'}
      </div>
      <div class="bftext">Signout
         <small>-</small>
      </div>
   </div>
</div>
  `

  bflex.innerHTML = progress
    console.log(gottendata)
    if(gottendata?.status == 'awaiting_confirmation'){
      statusblock.innerHTML = btntwo
    } else if(gottendata?.status == 'pending_approval')  {
      statusblock.innerHTML = btnone
    } 
    else{
      statusblock.innerHTML = ''
    }
   }
}


async function sendscandata(id){


  // alert(id)
  if(id){

    const payload = {
      "post_id": selectedid,
      "tag_id": id
  }
    try {
      const response = await  axiosInstance.post(`/verifyvisitor`, payload)
      console.log(response.data); // Assuming the response data contains useful information
      VanillaToasts.create({
        title: 'Success',
        text: response?.data?.message || 'Success',
        type: 'success',
        timeout: 5000
      });
      
      newvisitation_data = response?.data?.visitorsdata
      // console.log(newvisitation_data)
      displaydashboardtable()
      displaypending()
      loadsidedata(selectedid)
  
    } catch (error) {
      console.error(error.message);
      VanillaToasts.create({
        title: 'Error!',
        text: error.message || 'An Error Occurred',
        type: 'error',
        timeout: 5000
      });
      loadsidedata(selectedid)
    }
  
  }
else{
  VanillaToasts.create({
    title: 'Error!',
    text:  'An Error Occurred',
    type: 'error',
    timeout: 5000
  });
  loadsidedata(selectedid)
}
   
}


function scanqr(id) {
  alert('ssssssss')

  selectedid = id
startScan()
// sendscandata('#vic882')
toggleclosemod()
const statusblock = document.getElementById('statusbtn')
const loadingbtn = `
<div class="loginfrm">
  
<button id="loadingBtn" style="display: flex;" disabled><i class="fa fa-spinner fa-spin"></i> Loading</button>
</div>
`
statusblock.innerHTML = loadingbtn
}




function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    document.getElementById("result").innerHTML =
    '<span class="result">' + decodedText + "</span>";
    var confirmation = confirm(`confirm that you are about to assign tag ${decodedText} to victor`)
    if (confirmation){
    
      html5QrcodeScanner.clear();
      sendscandata(decodedText)
      toggleclosemod()
    

     
    }
 
}

function onScanError(errorMessage) {
    // handle on error condition, with error message
}
function startScan() {
            html5QrcodeScanner = new Html5QrcodeScanner(
                "reader", { fps: 10, qrbox: 250 });
            html5QrcodeScanner.render(onScanSuccess, onScanError);
        }


function toggleFlashlight() {
            const flashlightState = html5QrcodeScanner.isFlashOn();
            if (flashlightState) {
                html5QrcodeScanner.turnOffFlash();
                document.getElementById("toggleFlashlight").innerText = "Turn On Flashlight";
            } else {
                html5QrcodeScanner.turnOnFlash();
                document.getElementById("toggleFlashlight").innerText = "Turn Off Flashlight";
            }
        }


function toggleclosemod() {

          var lover = document.getElementById("lover");
          if (lover.style.display === "none") {
              lover.style.display = "flex";
          } else {
              stopscan()
              lover.style.display = "none";
          }
          loadsidedata(selectedid)
      }


      function stopscan() {
        html5QrcodeScanner.clear();

     
      }






      fetch("https://veezitorbackend.vercel.app/employee")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        VanillaToasts.create({
          title: "Success!",
          text: "Request sent successfully",
          type: "success",
          timeout: 3000,
        });
        console.log("GET Success:", data);
        let myemployeearray = [];
        myemployeearray = data;
      })
      .catch((error) => {
        console.error("GET Error:", error);
        // Handle GET request error here
      });
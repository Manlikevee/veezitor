import React, { useRef , useState, useContext} from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { VeeContext } from '@/context/veecontext';


const Sidenav = ({mylogo}) => {
  const {companySetup, loading, error, fetchCompanySetup, refreshAccessToken, checkusername, isSidebarOpen, isOverlayOpen, toggleSidebar } = useContext(VeeContext);

  const [isLoading, setIsloading] = useState(false);
  const dropdownContentRef = useRef(null);
  const dropdown = () => {

    const dropdownContent = dropdownContentRef.current;
    dropdownContent.classList.toggle('dropdownshow');

    // Calculate the height of the dropdown content based on its actual content
    if (dropdownContent.classList.contains('dropdownshow')) {
      dropdownContent.style.height = dropdownContent.scrollHeight + 'px';
    } else {
      dropdownContent.style.height = '0px';
    }
  };

  const router = useRouter()
  const logout = () => {
    // alert('hjello')
    const allCookies = Cookies.get();
  
    // Remove each cookie
    for (const cookie in allCookies) {
      Cookies.remove(cookie);
    }

    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
    toast.success(`See You Soon`);
    
    router.replace('/auth/login')

  
  }

    const pathname = usePathname();
  return (

    <div className={`sidebar ${isSidebarOpen ? 'sidebarshow' : ''}`} id="sidebar">
    <div class="close" onClick={toggleSidebar}>
      <span class="material-symbols-outlined"> cancel </span>
    </div>
    <div class="sidebardatas">
      <div class="sidebarlogo">
        <img src={`${mylogo || 'InvestmentOneLogo.png' }`} alt="" />
        VEEZitors
      </div>
    </div>

    <div class="sidebardatas">
      <div class="sidebardatasflex">
        
        <Link href="/dashboard" className={`dashflex ${pathname === '/dashboard' ? 'active' : ''}`}>
          <div class="dashflexicon">
            <span class="material-symbols-outlined"> dashboard </span>
          </div>
          <div class="dashflextext">Dashboard </div>
        </Link>

        <Link href="#" class="dashflex">
          <div class="dashflexicon">
            <span class="material-symbols-outlined"> work </span>
          </div>
          <div class="dashflextext">Roles</div>
        </Link>

        <Link href="/employees" className={`dashflex ${pathname === '/employees' ? 'active' : ''}`}>
          <div class="dashflexicon">
            <span class="material-symbols-outlined"> badge </span>
          </div>
          <div class="dashflextext">Employees</div>
        </Link>
        <div>
          <Link href="#" class="dashflex " onClick={dropdown}>
            <div class="dashflexicon">
              <span class="material-symbols-outlined"> summarize </span>
            </div>
            <div class="dashflextext">Visitors Module</div>
        
            <span  class="ends material-symbols-outlined">
              expand_more
              </span>
          </Link>
          <div class="dropdowncontent" id="ddown" ref={dropdownContentRef}>
            <div class="innerdashflexs" >
              <Link href="#" class="dashflex" onclick="visitorsform()">
                <div class="dashflexicon">
                  <span class="material-symbols-outlined">
                    nest_doorbell_visitor
                    </span>
                </div>
                <div class="dashflextext">New Visitor</div>
              </Link>
              <Link href="index.html" class="dashflex">
                <div class="dashflexicon">
                  <span class="material-symbols-outlined">
                    store
                    </span>
                </div>
                <div class="dashflextext">Vendor</div>
              </Link>
              <Link href="#" class="dashflex">
                <div class="dashflexicon">
                  <span class="material-symbols-outlined">
                    fact_check
                    </span>
                </div>
                <div class="dashflextext">Visitors List</div>
              </Link>
        
              <Link href="#" class="dashflex">
                <div class="dashflexicon">
                  <span class="material-symbols-outlined">
                    app_blocking
                    </span>
                </div>
                <div class="dashflextext">BlackList Visitor</div>
              </Link>
        
              <Link href="/qrcode" className={`dashflex ${pathname === '/qrcode' ? 'activesub' : ''}`}>
                <div class="dashflexicon">
                  <span class="material-symbols-outlined">
                    qr_code_scanner
                    </span>
                </div>
                <div class="dashflextext">ID Tags</div>
              </Link>
          
            </div>
          
          </div>
        </div>

        <Link href="/integrations" className={`dashflex ${pathname === '/integrations' ? 'active' : ''}`}>
          <div class="dashflexicon">
            <span class="material-symbols-outlined"> display_settings
 </span>
          </div>
          <div class="dashflextext">Integrations</div>
        </Link>

        <Link href="/qrcode" className={`dashflex ${pathname === '/qrcode' ? 'active' : ''}`}>
          <div class="dashflexicon">
            <span class="material-symbols-outlined"> receipt_long </span>
          </div>
          <div class="dashflextext">Report</div>
        </Link>

    

        <Link href="/settings" className={`dashflex ${pathname === '/settings' ? 'active' : ''}`}>
          <div class="dashflexicon">
            <span class="material-symbols-outlined"> settings </span>
          </div>
          <div class="dashflextext">Settings</div>
        </Link>
      </div>
    </div>

    <div class="messagesettings">
      <div class="logoutbtn" onClick={logout}>
        <div class="dashflex">
          <div class="icon">
            <span class="material-symbols-outlined"> logout </span>
          </div>
          <div class="messagetext">Logout</div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Sidenav
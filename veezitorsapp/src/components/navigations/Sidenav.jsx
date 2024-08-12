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
    <div className="close" onClick={toggleSidebar}>
      <span className="material-symbols-outlined"> cancel </span>
    </div>
    <div className="sidebardatas">
      <div className="sidebarlogo">
        <img src={`${mylogo || 'InvestmentOneLogo.png' }`} alt="" />
        VEEZitors
      </div>
    </div>

    <div className="sidebardatas">
      <div className="sidebardatasflex">
        
        <Link href="/dashboard" className={`dashflex ${pathname === '/dashboard' ? 'active' : ''}`}>
          <div className="dashflexicon">
            <span className="material-symbols-outlined"> dashboard </span>
          </div>
          <div className="dashflextext">Dashboard </div>
        </Link>

        <Link href="#" className="dashflex">
          <div className="dashflexicon">
            <span className="material-symbols-outlined"> work </span>
          </div>
          <div className="dashflextext">Roles</div>
        </Link>

        <Link href="/employees" className={`dashflex ${pathname === '/employees' ? 'active' : ''}`}>
          <div className="dashflexicon">
            <span className="material-symbols-outlined"> badge </span>
          </div>
          <div className="dashflextext">Employees</div>
        </Link>
        <div>
          <Link href="#" className={`dashflex ${pathname === '/qrcode' ||  pathname === '/visitorslist' ||  pathname === '/analytics' ? 'active' : ''}`}    onClick={dropdown}>
            <div className="dashflexicon">
              <span className="material-symbols-outlined"> summarize </span>
            </div>
            <div className="dashflextext">Visitors Module</div>
        
            <span  className="ends material-symbols-outlined">
              expand_more
              </span>
          </Link>
          <div className="dropdowncontent" id="ddown" ref={dropdownContentRef}>
            <div className="innerdashflexs" >
              <Link href="#" className="dashflex" onclick="visitorsform()">
                <div className="dashflexicon">
                  <span className="material-symbols-outlined">
                    nest_doorbell_visitor
                    </span>
                </div>
                <div className="dashflextext">New Visitor</div>
              </Link>
              <Link href="index.html" className="dashflex">
                <div className="dashflexicon">
                  <span className="material-symbols-outlined">
                    store
                    </span>
                </div>
                <div className="dashflextext">Vendor</div>
              </Link>
              <Link href="/visitorslist" className="dashflex">
                <div className="dashflexicon">
                  <span className="material-symbols-outlined">
                    fact_check
                    </span>
                </div>
                <div className="dashflextext">Visitors List</div>
              </Link>
        
              <Link href="#" className="dashflex">
                <div className="dashflexicon">
                  <span className="material-symbols-outlined">
                    app_blocking
                    </span>
                </div>
                <div className="dashflextext">BlackList Visitor</div>
              </Link>
        
              <Link href="/qrcode" className={`dashflex ${pathname === '/qrcode' ? 'activesub' : ''}`}>
                <div className="dashflexicon">
                  <span className="material-symbols-outlined">
                    qr_code_scanner
                    </span>
                </div>
                <div className="dashflextext">ID Tags</div>
              </Link>

              <Link href="/analytics" className={`dashflex ${pathname === '/analytics' ? 'activesub' : ''}`}>
                <div className="dashflexicon">
                  <span className="material-symbols-outlined">
                    qr_code_scanner
                    </span>
                </div>
                <div className="dashflextext">Analytics</div>
              </Link>
          
            </div>
          
          </div>
        </div>

        <Link href="/integrations" className={`dashflex ${pathname === '/integrations' ? 'active' : ''}`}>
          <div className="dashflexicon">
            <span className="material-symbols-outlined"> display_settings
 </span>
          </div>
          <div className="dashflextext">Integrations</div>
        </Link>

        <Link href="/qrcode" className={`dashflex ${pathname === '/qrcode' ? 'active' : ''}`}>
          <div className="dashflexicon">
            <span className="material-symbols-outlined"> receipt_long </span>
          </div>
          <div className="dashflextext">Report</div>
        </Link>

    

        <Link href="/settings" className={`dashflex ${pathname === '/settings' ? 'active' : ''}`}>
          <div className="dashflexicon">
            <span className="material-symbols-outlined"> settings </span>
          </div>
          <div className="dashflextext">Settings</div>
        </Link>
      </div>
    </div>

    <div className="messagesettings">
      <div className="logoutbtn" onClick={logout}>
        <div className="dashflex">
          <div className="icon">
            <span className="material-symbols-outlined"> logout </span>
          </div>
          <div className="messagetext">Logout</div>
        </div>
      </div>
    </div>


  </div>

  )
}

export default Sidenav
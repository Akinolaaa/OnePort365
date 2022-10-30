import './navigation.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import idashboard from '../../assets/nav-icons/dashboard.svg';
import icustomers from '../../assets/nav-icons/customers.svg';
import icustomersL from '../../assets/nav-icons/customers-light.svg';
import iadmin from '../../assets/nav-icons/admin.svg';
import ishipments from '../../assets/nav-icons/shipments.svg';
import itracking from '../../assets/nav-icons/tracking.svg';
import idocuments from '../../assets/nav-icons/documents.svg';
import irates from '../../assets/nav-icons/rates.svg';
import iquotes from '../../assets/nav-icons/quotes.svg';
import iinvoices from '../../assets/nav-icons/invoices.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Logo(){
  return <img className="w-25" src={logo} alt='logo' />;
}

function Navigation() {
  const { pathname } = useLocation();
  
  function refinePath(str) {
    let navPath = "";
    if(str.length > 0 ){
      for(let i=1; i<str.length; i++) {
        if(str.charAt(i) === "/") {
          break;
        }
        navPath = navPath + str.charAt(i);
      }
      return navPath;
    }
    
  }

  useEffect(() => {
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    navItems.map(n => n.classList.remove('active-nav'));
    const currentPage = document.getElementById(refinePath(pathname));
    if(currentPage){
      currentPage.classList.add('active-nav');
    }
  }, [pathname])
  
  
  return(
    <>
      <div className='navigation'>
        <Logo />
        <Link className="nav-item" id='dashboard' to=''>
          <img src={idashboard} alt='dash'/>
          <p>Dashboard</p>
        </Link>
        <Link className="nav-item" >
          <img src={iadmin} alt='dash'/>
          <p>Admin</p>
        </Link>
        <Link className="nav-item" id='customers' to='/customers'>
          <img src={ refinePath(pathname) !=='customers' ? icustomers : icustomersL} alt='dash'/>
          <p>Customers</p>
        </Link>
        <Link className="nav-item" id='shipments' to='/shipments'>
          <img src={ishipments} alt='dash'/>
          <p>Shipments</p>
        </Link>
        <Link className="nav-item" >
          <img src={itracking} alt='dash'/>
          <p>Tracking</p>
        </Link>
        <Link className="nav-item">
          <img src={idocuments} alt='dash'/>
          <p>Documents</p>
        </Link>
        <Link className="nav-item">
          <img src={irates} alt='dash'/>
          <p>Rates</p>
        </Link>
        <Link className="nav-item">
          <img src={iquotes} alt='dash'/>
          <p>Quotes</p>
        </Link>
        <Link className="nav-item">
          <img src={iinvoices} alt='dash'/>
          <p>Invoices</p>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;
import './nav-item.styles.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function NavItem({ name, logo }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let className = pathname ===`/${name}` ? "nav-item active-nav" : "nav-item";

  function navHandler(event){
    navigate(`/${name}`)
  }
  return (
    <div className={className} onClick={navHandler}>
      <i className={logo}></i>
      <p>{name}</p>
    </div>
  ) 
}

export default NavItem;
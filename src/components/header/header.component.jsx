import { useLocation} from 'react-router-dom';
import './header.styles.scss';

function Header() {
  const { pathname } = useLocation();
  return(
    <div className="header">
      <h2>{pathname.slice(1).toUpperCase()}</h2>
      <p> end stuff</p>
    </div>
  )
}

export default Header;
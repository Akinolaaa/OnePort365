import './navxheader.styles.scss';
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';

function NavxHeader() {

  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  )
}

export default NavxHeader;
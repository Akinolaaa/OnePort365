import './navigation.styles.scss';
import NavItem from '../nav-Item/nav-item.component';
import ITEMS from '../../navigation.json';


function Logo(){
  return <p> Logo here</p>
}

function Navigation() {
  return(
    <div className='navigation'>
      <Logo />
      {
        ITEMS.map(({id, name, logo}) => <NavItem key={id} name={name} logo={logo} />)
      }
    </div>
    
  )
}

export default Navigation
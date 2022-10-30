//import { useLocation} from 'react-router-dom';
import inotif from '../../assets/header-icons/notification.svg';
import iimage from '../../assets/header-icons/image-1.svg';
import idown from '../../assets/header-icons/down.svg';


function Header({title}) {
  //const { pathname } = useLocation();
  return(
    <div className='relative left-[20%] w-[80%] flex items-center 
      justify-between border-b-2 py-8'>
      {/* <h2>{pathname.slice(1).toUpperCase()}</h2> */}
      <h2 className='pl-5 font-bold text-2xl text-black'>{title}</h2>
      <div className='flex justify-between pr-4'>
        <div className='relative flex items-center justify-center h-auto'>
          <img src={inotif} alt='bell' />
          <div className='absolute top-0.5 right-0.1 border rounded-full px-1 bg-red-500 '>
            <p className="text-xs text-white">2</p>
          </div>
        </div>
        <div className='px-5' >
          <img className='inline-block' height="56px" src={iimage} alt='thj' />
          <span>Temoc</span>
          <img className='inline-block p-1' src={idown} alt='yub' />
        </div>
      </div>
    </div>
  )
}

export default Header;
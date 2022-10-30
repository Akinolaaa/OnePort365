import './dropdown-btn.styles.scss'
import idown from '../../assets/header-icons/down.svg';
import { useState } from 'react';


export default function DropDownButton({ btnTxt, options, doThisWhenSelected}) {
  const [selectedOption, setSelectedOption] = useState('');

  const selectOption = (event) => {
    if(event.target.id === 'none') {
      setSelectedOption('');
      doThisWhenSelected(event.target.id.toLowerCase());
      return;
    }
    doThisWhenSelected(event.target.id.toLowerCase());
    setSelectedOption(event.target.id);
  }
  

  return (
    <div className="dropdown">
      <button className="dropbtn">
        {selectedOption || btnTxt}<img className="p-1" src={idown} alt='i' />
      </button>
      <div className="dropdown-content">
        {
          options.map(option => <p id={option} onClick={selectOption}>{option}</p>)
        }
        <p id='none' onClick={selectOption}>None</p>
      </div>
    </div>
  )
}
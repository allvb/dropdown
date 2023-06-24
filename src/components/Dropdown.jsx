import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown() {
  const data = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  const [show, setShow] = useState('');
  
  const handleShow = () => {
    show ? setShow((prev) => (prev = "")) : setShow((prev) => (prev = "open"));
  }

  return (
    <div className='container'>
      <div className={'dropdown-wrapper ' + show}>
        <button className='btn' onClick={handleShow}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList show={show} data={data}/>
      </div>
    </div>
  )
}

export default Dropdown
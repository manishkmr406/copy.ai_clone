import React from 'react'
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const Navbar = () => {
  const navigate=useNavigate();
  const user=useSelector(selectUser);
  return (
    <div className="navbar-wrapper">
    <div className='navbar_left'>
      <div className='logo_container'>
        <div className='logo_img' onClick={()=> navigate("/")}>
            <img src='https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62828ef38380777cb33cdf29_5f579853dab605076f3cbf3f_logo.svg' alt="Copy.ai"/>
        </div>
        <div className='hiring_text'>We're Hiring!</div>
      </div>
      <div className='navbar_menu'>
        <div className='menu_hover' onClick={()=> navigate('/chat')}>Chat</div>
        <div className='menu_hover'>Use Cases</div>
        <div className='menu_hover'>Resources</div>
        <div className='menu_hover'>Pricing</div>
      </div>
    </div>
    <div className='navbar_right'>
        <div className='menu_hover'>Contact Sales</div>
        <div className='menu_hover'>Login</div>
        <button className="started-btn">Get Started Free</button>
    </div>
    </div>
  )
}

export default Navbar

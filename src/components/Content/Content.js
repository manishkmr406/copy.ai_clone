import React, { useEffect } from 'react'
import "./Content.css";
import { auth,provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const Content = () => {
  const user=useSelector(selectUser);
  const navigate=useNavigate();

  const signIn = async () => {
    try {
      const result=await signInWithPopup(auth,provider);
      const user=result.user;
      console.log(user); 
      navigate('/chat')    
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  
  return (
    <div className='content-container'>
    <h1 className='text-heading'>Whatever you want to ask,<span className='text-gradient'>our chat has the answers</span></h1>
    <p>Get your <strong>free account today</strong></p>
    <div className='login_container'>
    <div className='signup-box'>
        <img src='https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6284d82e4f84aa3855d624fc_google_g_logo.svg' alt='google-img'/>
        <div className='btn-text' onClick={signIn}>
        Sign up with Google
        </div>
        </div>
        <div className='or-text'>or</div>
        <div className='email-box'>
        <div className='btn-text'>
        Sign up with email
        </div>
        <img src='https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56e89252a851df58dc0f_arrow_right_alt_FILL1_wght300_GRAD200_opsz24_w.svg' alt=''/>
        </div>
    </div>
    <div className="text-gray">
    No credit card required
  </div>
    </div>
  )
}

export default Content

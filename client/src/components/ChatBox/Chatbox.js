import React from 'react'
import "./Chatbox.css";
import Sidebar from '../Sidebar/Sidebar';
import ChatContent from '../ChatContent/ChatContent';

const Chatbox = () => {
  return (
    <div className='main-chat-container'>
    <div className='left-side'>
    <Sidebar />
    </div>
    <div className='right-side'>
    <ChatContent />
    </div>
    </div>
  )
}

export default Chatbox

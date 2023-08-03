import React from 'react'
import "./Chat.css";
import { useNavigate } from 'react-router-dom';

const Chat = ({setShow}) => {
  const navigate=useNavigate();

  const handleShow=()=>{
    setShow(true);
  }
  return (
    <div className="chat_hero-wrapper">
  <div className="container-hero">
        <h1 className="heading-text">
          <span className="text-gradient">
            Chat By Copy.ai:
          </span>
           Whatever
          you need, just ask.
        </h1>
        <p>
          <span>Scale your vision with Chat by Copy.ai,</span>the most natural way to interface with AI to 
          <span><strong>
            research, create, and achieve.
          </strong></span>
        </p>
        <div className="try_chat-btn-box" onClick={()=> navigate("/project")}>
            <div className="try_chat-btn" onClick={handleShow}>
              Try Chat by Copy.ai Free
            </div>
            <img src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629d56e89252a851df58dc0f_arrow_right_alt_FILL1_wght300_GRAD200_opsz24_w.svg" loading="lazy" alt="" className="button-icon icon-right"/>
        </div>
        <div className="text-gray">
          No credit card required
        </div>
  </div>
</div>

  )
}

export default Chat

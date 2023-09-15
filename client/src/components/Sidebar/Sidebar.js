import React from 'react'
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import NetworkPingOutlinedIcon from '@mui/icons-material/NetworkPingOutlined';

const Sidebar = () => {
    const navigate=useNavigate();
    
  return (
    <div className='sidebar'>
     <div className="sidebarOptions">
     <div className='logo_sidebar' onClick={()=> navigate("/")}>
        <img src='https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62828ef38380777cb33cdf29_5f579853dab605076f3cbf3f_logo.svg' alt="Copy.ai"/>
    </div>
      <div className="sidebarOption">
      <ChatOutlinedIcon />
        <p>Chat</p>
      </div>
      <div className="sidebarOption">
       <AssignmentOutlinedIcon />
        <p>My Projects</p>
      </div>
      <div className="sidebarOption">
        <StorageOutlinedIcon />
        <p>Infobase</p>
      </div>

      <div className="sidebarOption">
        <GraphicEqOutlinedIcon />
        <p>Brand Voice</p>
      </div>

      <div className="sidebarOption">
       <ContentPasteOutlinedIcon />
        <p>Templates</p>
      </div>

      <div className="sidebarOption">
        <BuildOutlinedIcon />
        <p>Tools</p>
      </div>
      <div className="sidebarOption">
        <NetworkPingOutlinedIcon />
        <p>Workflows</p>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;

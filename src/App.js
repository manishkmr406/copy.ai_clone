
import { useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Chatbox from './components/ChatBox/Chatbox';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar'; 
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [show,setShow]=useState(false);
  return (
    <BrowserRouter>
     {!show && <Navbar />}
     <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/chat' element={<Chat setShow={setShow}/>} />
      <Route path='/project' element={<Chatbox />} />
     </Routes>
     </BrowserRouter>
  );
}


export default App;

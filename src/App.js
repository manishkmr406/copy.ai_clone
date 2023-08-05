
import { useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Chatbox from './components/ChatBox/Chatbox';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar'; 
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
 
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<>
        <Navbar />
        <Content />
      </>} />
      <Route path='/chat' element={
      <>
        <Navbar />
        <Chat />
      </>
      } />
      <Route path='/project' element={<Chatbox />} />
     </Routes>
     </BrowserRouter>
  );
}


export default App;

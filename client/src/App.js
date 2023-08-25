import { useEffect } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Chatbox from './components/ChatBox/Chatbox';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar'; 
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { login, logout, selectUser } from './redux/userSlice';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth,(authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        )
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
 
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

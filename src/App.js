import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home.jsx';
import AddShow from "./scenes/AddShow.jsx";
import Login from "./scenes/Login.jsx";
import Signup from "./scenes/Signup.jsx";
import './styles/App.css';
import "./styles/index.css"


function App() {
  const [shows, setShows] = useState();
  const [user, setUser] = useState();
  
  return (
  <>
  
   <BrowserRouter>
    <Routes>
      <Route path="/"        element={ <Home shows={shows} setShows={setShows} />} />
      <Route path="/addshow" element={ <AddShow setShows={setShows} />} />
      <Route path="/login"   element={ <Login setUser={setUser} />} />
      <Route path="/signup"  element={ <Signup sertUser={setUser}/>} />
    </Routes>
   </BrowserRouter>
   </>
   );
} 

export default App;

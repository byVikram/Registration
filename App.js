
import React from 'react';
import './index.css';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
import { Route, Routes } from 'react-router-dom';
import Afterlogin from './Routes/Afterlogin';
import Aftersignup from './Routes/Aftersignup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/loggedin" element={<Afterlogin/>}></Route>
        <Route path='/signedup' element={<Aftersignup/>}></Route>
      </Routes>
    </>
  );
}

export default App;

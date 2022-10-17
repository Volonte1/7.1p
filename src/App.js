import React from "react";
import './App.css';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import {Routes, Route} from 'react-router-dom'
import NavFooter from './NavFooter'
import ConnectPage from './ConnectPage'
import Login from "./Login";
import Signup from "./Signup";
import './Header.css'



function App() {
    
    return (
      <Routes>
  <Route path='/' element={<NavFooter />}>
  <Route path='/' element={<HomePage />}>
  <Route path='about' element= {<AboutPage />}/>
  <Route path='connect' element= {<ConnectPage />}/>
  <Route path='login' element= {<Login />}/>
  <Route path='signup' element= {<Signup />}/>


  </Route>
  </Route>
  </Routes>
    )
  }
export default App 

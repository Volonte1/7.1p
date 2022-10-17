import React, { useState } from "react";
import Login from '../Login';
import {Outlet} from 'react-router-dom'


function HomePage() {

    return (
    <div>
        <Outlet />
    <div className="'header-div">
      <br></br>

      <br></br>
      <Login 
      />
    </div>
    </div>
    )
}
export default HomePage;


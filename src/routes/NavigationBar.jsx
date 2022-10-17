import React from "react"
import {Outlet, Link} from "react-router-dom"

function NavigationBar()
{
    return <div>
        <Link classname='link' to='/'>
            Home
        </Link>
        <Link classname='link' to='/About'>
            About
        </Link>
        <Link classname='link' to='/Signup'>
            Login
        </Link>

    <Outlet />
    </div>
}
export default NavigationBar
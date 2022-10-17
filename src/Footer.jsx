import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom'


function Footer(){
    return (
        <div className="footer">
            <div className="footer-left">
                <Link to='/about'>
                    About Deakin
                </Link>
            </div>
            <div className="footer-center">
                <Link to='/connect'>
                    Connect with us
                </Link>
            </div>
            <div className="footer-right">
               <h2>Socials</h2>
            </div>
        </div>
    )
}
export default Footer
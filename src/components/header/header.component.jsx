import React from "react";
import './header.style.scss';

import {Link} from 'react-router-dom'
import Navbar from "../Navbar/Navbar.component";
import Banner from "../banner/Banner.component";





const Header =()=>(
    <div className="site-header ">
        <div className="top-banner-action-wrap ">
            <div className="top-banner-action">
                <a href="https://www.naxa.com.np/innovations">
                    <span>
                    We have been working on several voluntary
                         initiatives during the COVID-19 pandemic. Check them out
                    </span>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            
            <Navbar />
            
            <Banner/>
        
     
        </div>
           
       
    </div>
);

export default Header;
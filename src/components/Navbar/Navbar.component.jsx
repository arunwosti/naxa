import {React, useState} from 'react'
import './Navbar.styles.scss'
import NavItem from './Nav-item.component'
import CustomButton from '../custom-button/custom-button.component'

import {ReactComponent as Publication} from '../../assets/publication.svg'
import {ReactComponent as Event} from '../../assets/event.svg'
import {ReactComponent as Media} from '../../assets/media.svg'
import {ReactComponent as Eventorg} from '../../assets/eventorg.svg'
import {ReactComponent as Teams} from '../../assets/team.svg'

export default function Navbar(props) {
  return (
    <div className="container navbar">
        <div className="nav-item">
        <a className="logo" href="/">
                    <img src='https://www.naxa.com.np/792f5bf2487bd27628a54fe64a712630.png' alt="logo pic"/>
                </a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
  
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"  data-bs-toggle="dropdown" aria-expanded="false">
            Portfolio
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">General</a></li>
            <li><a className="dropdown-item" href="#">International</a></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#"><Event className='companyIcons'/> About Us</a></li>
            <li><a className="dropdown-item" href="#"><Publication className='companyIcons' /> Team</a></li>
            <li><a className="dropdown-item" href="#"><Media  className='companyIcons'/> Work with us</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events & Media
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#"><Eventorg className='companyIcons'/> Events</a></li>
            <li><a className="dropdown-item" href="#"><Media className='companyIcons'/> Media</a></li>
            <li><a className="dropdown-item" href="#"><Publication className='companyIcons'/> Publications</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
        </nav>
        <CustomButton children={"Let's talk"}/> 

        </div>
  )
}

import {React,useState} from "react";

import './Navbar.styles.scss'

const NavItem =(props)=>{
    
    const [open, setOpen] =useState(false);
    return(

<li className="option">
<a href={props.url} onClick={()=>setOpen(!open)} >
    <span>{props.item}</span>
    <span className="dropdown-icon">{props.icon}</span>
  
  {open && props.children}

</a>
</li>

)};

export default NavItem;
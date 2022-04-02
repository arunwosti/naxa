import React from "react";

import './Dropdown.styles.scss'

const DropdownItem =(props)=>(

<li className="option">
<a href={props.url}><span className="dropdown-list">{props.iconList}</span><span>{props.itemName}</span></a>
</li>

);

export default DropdownItem;
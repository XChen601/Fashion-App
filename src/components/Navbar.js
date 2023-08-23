import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import logo from "./img/logo.png";
import {regularNavbar} from "./regularNavbar";
import {FcHome} from "react-icons/fc";
import {RiTeamFill} from "react-icons/ri";
import {FcContacts} from "react-icons/fc";
import {FcGoogle} from "react-icons/fc";
import {CgMenu} from "react-icons/cg";
import {CgClose} from "react-icons/cg";


function Navbar() {

  const [closed, setclosed] = useState(false);

  return (
    <nav  className="navbar">
      <img src={logo} alt="Perfect fit logo" id="logo"/>
      <div id="menu-icon">
        { closed && <div id="closed-i" onClick={()=> setclosed(!closed)}> <CgClose/> </div> }
        {!closed && <div id="menu-i" onClick={()=> setclosed(!closed)}> <CgMenu/> </div> }
      </div>
      
      <ul id="nav-menu">
        {regularNavbar.map((item,index)=>{
          return(
            <li key={index}>
              <Link to={item.url} className={item.cName}>{item.title} {icons(index)}</Link>
            </li>
          )
        } )}
      </ul>
    </nav>
  );
}
function icons(index){
  const iconCollection = [<FcHome/>,<RiTeamFill/>,<FcContacts/>,<FcGoogle/>];
  return(
    iconCollection[index]
  );
}

export default Navbar;

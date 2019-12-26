import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {


    return(
    
  <nav>
  <div class="nav-wrapper">
    <Link className="brand-logo">Logo</Link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><Link  to="/"> Home</Link></li>
      <li><Link to="/help">Help</Link></li>
      <li><Link to="/movie">Movie</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
</nav>
    )
}


export default Navbar;
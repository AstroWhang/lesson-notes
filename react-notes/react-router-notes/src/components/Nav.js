import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return ( 
    <nav>
      <Link style={navStyle} to="/">
        <h3>Logo</h3>
      </Link>
      
      <ul className="nav-links">
        <Link style={navStyle} to="/Shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
        
      </ul>
    </nav>
  );
}

export default Nav;
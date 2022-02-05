import React from "react";
import {Link} from "react-router-dom";

import "./header.scss";



 const Header=()=> {
 
  return (
    <div className="header">
      <Link className="logo" to="/">
      <b>PANKAJ</b> 
      </Link>
      <div className="options">
       <Link className="option " to="/shop">SHOP</Link>
       <Link className="option " to="/contact">CONTACT</Link>
       <Link className="option" to="/cart">CART</Link>
      </div>
    </div>
  
  );
  
};

 

export default Header;


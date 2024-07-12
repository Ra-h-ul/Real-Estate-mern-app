import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [open , setOpen]= useState(false);

  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="../../public/logo.png" alt="logo" />
          <span>Real Estate</span>
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Agents</a>
        <a href="/">other</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a className="signup" href="/">
          sign up
        </a>

        <div className="burger_menu">
          <img src="../../public/menu.png" alt="Menu icon"
            onClick={()=>setOpen(prev => !prev)}
          />
          
          <div className={open? "burger_menu_items active" : "burger_menu_items"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Agents</a>
            <a href="/">other</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>

        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;

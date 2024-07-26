import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [open , setOpen]= useState(false);
  const [auth , setAuth] = useState(false);
  return (
    <nav>
      <div className="left">
        <Link className="logo" to ={"/"}>
          <img src="logo.png" alt="logo" />
          <span>Real Estate</span>
        </Link>

        <Link to ={"/"}>Home</Link>
        <Link to ={"/list"}>Properties</Link>
        <Link to ={"/"}>chats</Link>
        <Link to ={"/"}>about</Link>
      </div>
      <div className="right">
        
        { auth==false &&
        <>
         <Link to ={"/Login"}>Sign in</Link>
        <Link className="signup" to ={"/register"}>
          sign up
        </Link>
        </>
         
        }

      { auth==true &&
        <>
         <Link to ={"/Profile"}>
          <img className="userimage" src="./profile.png" alt="" />
         </Link>
        <Link className="signup" to ={"/register"}>
        Logout
        </Link>
        </>
         
        }

      

        

        <div className="burger_menu">
          <img src="menu.png" alt="Menu icon"
            onClick={()=>setOpen(prev => !prev)}
          />
          
          <div className={open? "burger_menu_items active" : "burger_menu_items"}>
            <Link to ={"/"}>Home</Link>
            <Link to ={"/list"}>Properties</Link>
            <Link to ={"/"}>chats</Link>
            <Link to ={"/"}>about</Link>
            {
              auth==false &&
              
              <>
              <Link to ={"/Login"}>Sign in</Link>
              <Link to ={"/register"}>Sign up</Link>
              </>
              
            }
          </div>

        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;

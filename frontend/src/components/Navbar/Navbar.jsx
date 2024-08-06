import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const [open , setOpen]= useState(false);
  const {currentUser} = useContext(AuthContext);

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
        
        { currentUser===false &&
        <>
         <Link to ={"/Login"}>Sign in</Link>
        <Link className="signup" to ={"/register"}>
          sign up
        </Link>
        </>
         
        }

      { currentUser &&
        <>
         <Link to ={"/Profile"}>
          <img className="userimage" src={currentUser.avatar || "./profile.png"} alt="" />
         </Link>
          <span className="signup">
            {currentUser.username}
          </span>
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
              currentUser==false &&
              
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

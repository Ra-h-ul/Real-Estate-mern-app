import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";


function Register() {

    const [err,setErr]=useState(false);
    const [loading , setLoading] = useState("");
    const navigate = useNavigate();

    const handlesubmit= async (e)=>{
      setLoading(true);
      setErr("");
        e.preventDefault();
        const formdata = new FormData(e.target);
        const username = formdata.get("username");
        const password = formdata.get("Password");
        const email = formdata.get("email");

     
        
        try {
            const res = await axios.post( "http://localhost:8800/api/auth/register", {
                email,username,password
            })
            navigate("/");
            setErr("user created sucessfully");
            
        } 
        
        catch (error) {
          
           setErr(error.response.data.message);
            
        } finally{
          setLoading(false);
        }
        

    }

  return (
      
      
      
    <form onSubmit={handlesubmit}>
      <div className="register layout" >
      <div className="details">
        <p>SIGN UP</p>
        <p>Unlock Your Dream Home: Sign Up Today!</p>
      </div>

      <div className="details ip_fields">
        <input type="text" placeholder="Email" name="email" minLength={1} />
        <input type="text" placeholder="Username" name="username" required minLength={3} maxLength={20} />
        <input type="text" placeholder="Password" name="Password"  required minLength={3} maxLength={20} />
        <button disabled={loading} >Sign Up</button>
      </div>
        
        
         <p style={{color:"red"}} >{err}</p>
        

      <div className=" alternative">
        
        <p>Already have an account ? </p>

        <Link className="login" to={"/Login"}>
          login in.
        </Link>
      </div>

      <div className="err">
        
      </div>
    </div>


    </form>
  );
}

export default Register;

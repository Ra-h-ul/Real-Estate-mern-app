import React, { useContext, useState } from "react";
import "../Register/Register.css";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Login() {


    
  const [err,setErr]=useState("");
  const [loading , setLoading] = useState("");
  
  const {updateUser} = useContext(AuthContext);
  
  

  const navigate = useNavigate();

  const handlesubmit= async (e)=>{
    setLoading(true);
    setErr("");
      e.preventDefault();
      const formdata = new FormData(e.target);
      const username = formdata.get("username");
      const password = formdata.get("Password");
   
      
      try {
          const res = await axios.post( "http://localhost:8800/api/auth/login", {
              username,password
          })
        
          updateUser(res.data)
          navigate("/")
          console.log(res);
          
      } 
      
      catch (error) {
        
         setErr(error.response.data.message);
       
          
      } finally{
        setLoading(false);
      }
      

  }

  return (
    <form onSubmit={handlesubmit} >
      <div className="register layout">
        <div className="details">
          <p>LOG IN</p>
          <p>Welcome Back! Let's Find Your Next Home.</p>
        </div>

        <div className="details ip_fields">
          <input type="text" placeholder="Username" name="username" required minLength={3} maxLength={40} />
          <input type="text" placeholder="Password" name="Password" required minLength={3} maxLength={40} />
          <button >Login in</button>
        </div>

        <p style={{color:"red"}}> {err} </p> 
        <div className=" alternative">
          
          <p>Don't have an account ? </p>

          <Link className="login" to={"/register"}>
            Sign Up.
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;

import React, { useContext, useEffect } from 'react'
import './Profile.css'
import {listData} from "../../lib/dummydata";
import Card from '../../components/Card/Card'
import Chat from '../Chat/Chat';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


function Profile() {
  const {updateUser , currentUser} = useContext(AuthContext);
    const data = listData;
    const navigate = useNavigate();
    
    useEffect( ()=>{
      if(currentUser===null){
        navigate("/Login");
      }
    },[currentUser , navigate]);


    const handleLogout= async ()=>{
      
      try {
        const res = await axios.post( "http://localhost:8800/api/auth/logout");
         updateUser(null);
         navigate("/")
        
      } catch (error) {
        console.log(error);
      }
    }

  return (
    
    currentUser &&(

      <div className="profile">

        <div className="left">
                <div className="userdetails">
                    <div className="top">
                         <h1>User Information</h1>
                         <Link to='/profile/update' >
                         <button> Update profile</button>   
                         </Link>
                    </div>

                    <div className="middle">
                        <div className='Avatar' >Avatar : 
                            <img src={ currentUser.avatar ||  "profile.png"} alt="" />
                        </div>

                        <p>Username : {currentUser.username} </p>

                        <p>
                            Email : {currentUser.email}
                        </p>
                    </div>

                    <div className="logout" onClick={handleLogout}>
                      <button>Log out</button>
                    </div>


                    <div className="bottom">
                        <h1>My List</h1>
                         <button> Add New Post</button>   
                    </div>

                </div>

                <div className="mylist">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                  ))}
                </div>

                <div className="saveditems">
                <h1>saved Items</h1>

                {data.map((item) => (
                  <Card key={item.id} item={item} />
                  ))}
                </div>
        </div>

        <div className="right">
                <Chat/>
        </div>

    </div>
  )
  )
}

export default Profile
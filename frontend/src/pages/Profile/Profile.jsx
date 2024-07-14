import React from 'react'
import './Profile.css'
import {listData} from "../../lib/dummydata";
import Card from '../../components/Card/Card'
import Chat from '../Chat/Chat';

function Profile() {
    const data = listData
  return (
    <div className="profile">

        <div className="left">
                <div className="userdetails">
                    <div className="top">
                         <h1>User Information</h1>
                         <button> Update profile</button>   
                    </div>

                    <div className="middle">
                        <div className='Avatar' >Avatar : 
                            <img src="profile.png" alt="" />
                        </div>

                        <p>Username : Rahul pandita</p>

                        <p>
                            Email : rahulpandita@gmail.com 
                        </p>
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
}

export default Profile
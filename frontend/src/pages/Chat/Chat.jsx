import React, { useState } from 'react'
import './Chat.css'
function Chat() {

  const [chat , setChat] = useState(true);

  return (
    <div className="chat">

      <div className="messages">
        <h1>Messages</h1>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>


        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>

        <div className="message">
          <img src="./profile.png" alt="" />
           <p>Rahul pandita</p>
           <p>Lorem ipsum dolor sit amet....</p>
        </div>


      </div>
    {
      chat&&
      <div className="inbox">
        
        <div className="userdetails">
         
          <div className="Avatar">
          <img src="./profile.png" alt="" />
          <p>Rahul Pandita</p>
          </div>
          <div className='cross' 
          onClick={()=>setChat(false)}
          >X</div>
        </div>

        <div className="chatsection">
          

          <div className="wrappersender">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrapperreceiver">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrappersender">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrappersender">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrappersender">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrapperreceiver">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrappersender">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          <div className="wrappersender">
          <div className="msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>1hour ago</p>
          </div>
          </div>

          </div>

          <div className="sendmsg">
            <textarea></textarea>
            <button>send</button>
          </div>
        </div>
      }
      </div>


  
  )
}

export default Chat
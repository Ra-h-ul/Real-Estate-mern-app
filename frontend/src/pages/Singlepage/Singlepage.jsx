import React from 'react'
import "./Singlepage.css"
import Slider from '../../components/Slider/Slider'
import {singlePostData , userData} from '../../lib/dummydata'
import Singlemap from '../../components/Singlemap/SingleMap';

function Singlepage() {

  const data=singlePostData;
  const userdata=userData;
  return (
    <>
    <div className="singlepage">

    <div className="left">
          <div className="imagecontainer">
            <Slider  images={data.images}/>
          </div>

          <div className="Estatedetails">

            <div className="details">
            <h1>{data.title}</h1>
            <span>{data.address}</span>
            <span>{data.price}</span>
            </div>

            <div className="user">
              <img src={userdata.img} alt="" />
              <p>{userdata.name}</p>
              
            </div>
            
           
          </div>
          
          <div className='facilities'>
            <p> Bathroom : {data.bathroom}</p>
            <p> Bedroom :{data.bedRooms}</p>
            <p> pet policy : Yes</p>
          </div>

          <div className='facilities small'>
            <p> <img src="./bathtub.png" alt="" /> {data.bathroom}</p>
            <p> <img src="./bed.png" alt="" />  {data.bedRooms}</p>
            <p> <img src="./pet.png" alt="" />  Yes</p>
          </div>
    </div>

    <div className="right">
        <Singlemap pos={data}/>
        </div>
    </div>

    <p className='description'>
              {data.description}
              
             
          </p>

    </>
   
  )
}

export default Singlepage
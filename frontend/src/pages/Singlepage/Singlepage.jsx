import React from 'react'
import "./Singlepage.css"
import Slider from '../../components/Slider/Slider'
import {singlePostData , userData} from '../../lib/dummydata'
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
          <p>
              {data.description}
              {data.description}
              {data.description}
             
            </p>
    </div>

    <div className="right">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, aliquid non, ex eos adipisci, eum delectus sequi ullam ipsam at corrupti incidunt distinctio repellat dolorem hic magnam. Saepe placeat, eum temporibus dolores exercitationem dolorem amet.
          
        </p>
        </div>
    </div>

    </>
   
  )
}

export default Singlepage
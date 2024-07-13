import React from "react";
import "./Singlepage.css";
import "../../index.css"
import { listData } from "../../lib/dummydata";
import Searchfilter from "../../components/Searchfilter/Searchfilter";
import Card from "../../components/Card/Card";
const data = listData;

function Singlepage() {
  return (
    <>
    <div className="listpage">

    <div className="ListContainer">
      <div className="searchFiter">
        <Searchfilter/>

        {
          data.map(item=>(
            <Card key={item.id} item={item}/>
          ))
        }

      </div>
      
    </div>

    <div className="mapContainer">map</div>

    </div>


    </>
  );
}

export default Singlepage;

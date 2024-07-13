import React from "react";
import "./Listpage.css";
import "../../index.css";

import { listData } from "../../lib/dummydata";
import Searchfilter from "../../components/Searchfilter/Searchfilter";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";


const data = listData;

function Listpage() {
  return (
    <>
      <div className="listpage">
        <div className="ListContainer">
          <div className="searchFiter">
            <Searchfilter />

            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mapContainer">
        <Map items={data}/>
        
      </div>
    </div>
    </>
  );
}

export default Listpage;

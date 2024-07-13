import React from 'react'
import "./Searchfilter.css"

function Searchfilter() {
  return (
    
    <>
    <h1>Uncover hidden treasures</h1>
    <div className="searchfilter">
        
    

    <div className="top">
        <label htmlFor="Location">Location</label>
        <input type="text" id='city' name='city' placeholder='City Location ' />
    </div>

    <div className="bottom">
        <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
            </select>
        </div>

        <div className="item">
            <label htmlFor="minprice">Min</label>
            <input type="number" placeholder='any' min={0} max={10000000} />
        </div>

        <div className="item">
            <label htmlFor="maxprice">Max</label>
            <input type="number" placeholder='any' min={0} max={10000000} />
        </div>

       

        <button>search</button>
    </div>
    </div>
    </>
  )
}

export default Searchfilter
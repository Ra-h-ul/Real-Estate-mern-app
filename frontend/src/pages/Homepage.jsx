import React from 'react'
import "../index.css"
import "./Homepage.css"
import Searchbar from '../components/Searchbar/Searchbar'

function Homepage() {
  return (
    <div className='content' >

        <div className="container_left">
            <h1>Unlock Your Future: Discover Homes You’ll Love</h1>
            <span>Explore our curated collection of homes designed to match your dreams. Whether you're seeking tranquility, luxury, or a vibrant community, find your perfect place with us.</span>

            <Searchbar/>
        </div>
        
        <div className="container_right">
            <a href="/">
                <img src="./homepage.jpg" alt="Hero image" />
            </a>
        </div>


    </div>
  )
}

export default Homepage
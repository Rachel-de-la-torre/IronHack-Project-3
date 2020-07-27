import React from 'react';
//import Thread from '../../../models/Thread';
import axios from 'axios';
import ThreadList from './threads/ThreadList';

const Home = () => {
  return (
  <div className="homepage"> 
    {/* <Navbar />  */}
    <h1 className="homepage-header">See all these amazing meat threads!</h1>
      
    <div className="map-container">
      <div className="mapbox">

        <p>This is a map placeholder</p>
      </div>
    </div>
      <div className="homepage-threads">
            <ThreadList/>
      </div>
      </div>
  )
}
export default Home;
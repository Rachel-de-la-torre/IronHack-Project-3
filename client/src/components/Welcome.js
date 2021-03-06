import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ampelman } from "../utils/imageUpload";

export default class Welcome extends Component {
  render() {
    return (
      <>
        {/* <div className="menu-bar">
          <p>GLB</p>
        </div> */}
        <div className="welcome-page">
          <div className="welcome-picture">
            <img src={ampelman} alt="pic" />
          </div>
      
          <div className="welcome-text">
            <h2>Sign up to get help from native German speakers</h2>
            <p></p>

            <div className="welcome-signup">
              <ul>
                <li>
                  <Link to="/login">log in</Link>
                </li>
                <li style={{marginLeft: "4%"}}>
                  <Link to="/signup">sign up</Link>
                </li>
              </ul> 
              </div>
            </div>
           
        </div>
      </>
    );
  }
}

 
import React from "react";
import "../css/Welcome.css";
function Homepage() {
    return (
        <div className="parent-div">
            <div className="welcome-top">
                <div className="welcome-time">
                    <h1>Good Morning</h1>
                </div>
                <div className="welcome-user">
                    <h1>Welcome, Bryan Rivera
                    </h1>
                </div>
                <img src="components/img/logo.png" alt="Logo"></img>
            </div>
            <div className="welcome-weather">
                <div className="">
                    <h1>Temperature</h1>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
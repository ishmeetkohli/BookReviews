import './App.css';
import React from "react";
import Routes from "./Routes/Routes";
import LoginButton from "./Login/LoginButton";
import LogoutButton from "./Login/LogoutButton";
import Profile from "./Login/Profile";
import ReviewFeed from "./Review/ReviewFeed";
import {openHome} from "./Routes/RouteHelper";

function App() {
    return (
        <div className="app">
            <div className="routes">
                <Routes/>
            </div>
            <div className="side-bar">
                <div className="nav-actions">
                    <div>
                        <Profile/>
                    </div>
                    <div className="nav-buttons">
                        <button onClick={openHome}>Home</button>
                        <LoginButton/>
                        <LogoutButton/>
                    </div>
                </div>
                <div>
                    <ReviewFeed/>
                </div>

            </div>

        </div>
    );
}

export default App;

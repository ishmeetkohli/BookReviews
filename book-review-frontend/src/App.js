import './App.css';
import Routes from "./Routes";
import LoginButton from "./Login/LoginButton";
import React from "react";
import LogoutButton from "./Login/LogoutButton";
import Profile from "./Login/Profile";
import ReviewFeed from "./Review/ReviewFeed";

function App() {
    return (
        <div className="app">
            <div className="routes">
                <Routes/>
            </div>
            <div className="side-bar">
                <div className="login-button">
                    <Profile/>
                    <LoginButton/>
                    <LogoutButton/>
                </div>
                <div className="review-feed">
                    <ReviewFeed/>
                </div>

            </div>

        </div>
    );
}

export default App;

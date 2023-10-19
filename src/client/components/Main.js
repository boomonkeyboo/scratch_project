import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Link, BrowserRouter } from "react-router-dom";
import Chatboard from "./Chatboard.jsx";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Profile from "./Profile.js";
import Update from "./Update.js";

function Main(props) {
    const navigate = useNavigate();
    console.log("initial load")
    function loginCheck() {
        console.log('attempt fetch')
        try {
            fetch('http://localhost:3001/api/verify', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                mode: "cors",
            })
                .then(response => response.json())
                .then(data => {
                    if (data !== true) login();
                    console.log("This is " + data)
                })
        } catch {
            login();
        }
    }
    useEffect(() => {
        loginCheck()
    }, []);

    // // "routes" to redirect users
    function login() {
        navigate("/login")
    }

    return (
        <>
            {/* <nav>
                <span>
                    <Link to="/">Main</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/update">Update</Link>
                </span>
            </nav> */}
            <Routes>
                <Route path="/" element={<Chatboard user={props.user} />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/signup/*" element={<Signup />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/update/*" element={<Update />} />
            </Routes>
        </>
    )
}

export default Main;
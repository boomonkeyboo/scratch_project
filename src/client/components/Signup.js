import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";


function Signup() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const signupData = {
            fn: firstName,
            ln: lastName,
            email: email,
            username: username,
            password: password
        }
        try {
            const result = await fetch('http://localhost:3001/api/registeruser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupData)
            })

            
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="signup-wrapper">
            {/* <h1>Signup</h1> */}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>First Name (Optional)</p>
                    <input type="text" onChange={el => setFirstName(el.target.value)} />
                </label>
                <label>
                    <p>Last Name (Optional)</p>
                    <input type="text" onChange={el => setLastName(el.target.value)} />
                </label>
                <label>
                    <p>Email Address</p>
                    <input type="text" onChange={el => setEmail(el.target.value)} />
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={el => setUsername(el.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={el => setPassword(el.target.value)} />
                </label>
                <div>
                    <button className="bttn" onClick={handleSubmit}>Submit</button>
                </div>
            </form>

        </div>

    )

}

export default Signup;
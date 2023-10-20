import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Profile from "./components/Profile.js";
import Update from "./components/Update.js";
import './styles/App.scss'
import { UserContext } from './Context.js';
import AuthProvider from './components/AuthProvider.jsx';

function App() {
  const [user, setUser] = useState({});
  const userValues = [user, setUser]
  console.log("rerendering app")
  return (
    <BrowserRouter>
        <AuthProvider>
          <UserContext.Provider value={userValues}>
            <Routes>
              <Route path="/login/*" element={<Login setUser={setUser} user={user} />} />
              <Route path="/signup/*" element={<Signup />} />
              <Route path="/" element={<Main user={user} />} />
              <Route path="/profile/*" element={<Profile setUser={setUser} user={user} />} />
              <Route path="/update/*" element={<Update setUser={setUser} user={user} />} />
            </Routes>
          </UserContext.Provider>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
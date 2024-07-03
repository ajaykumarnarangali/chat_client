import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import {useAuthcontext} from "./context/Authcontext"

import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from "react";

function App() {

  const {currentUser}=useContext(useAuthcontext)

  return (
    <>
      <div className="p-4 flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={currentUser?<Home />:<Navigate to={'/login'}/>} />
          <Route path="/register" element={currentUser?<Navigate to={'/'}/>:<Register />} />
          <Route path="/login" element={currentUser?<Navigate to={'/'}/>:<Login />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  )
}

export default App

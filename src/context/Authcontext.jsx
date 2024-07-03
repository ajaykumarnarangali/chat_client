import React, {  createContext, useEffect, useState } from 'react'

export const useAuthcontext=createContext()

function Authcontext({children}) {
    const [currentUser,setCurrentuser]=useState(JSON.parse(localStorage.getItem('user'||null)))

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])


  return (
    <useAuthcontext.Provider value={{currentUser,setCurrentuser}}>
        {children}
    </useAuthcontext.Provider>
  )
}

export default Authcontext

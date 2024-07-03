import React, { useContext } from 'react'
import useSignout from '../hooks/useSignout'
import {useAuthcontext} from '../context/Authcontext'

function Signout() {

  const {loading,logOut}=useSignout();
  const {setCurrentuser}=useContext(useAuthcontext);

  const handleSignout=async()=>{
    await logOut();
    setCurrentuser(null);
  }

  return (
    <div>
      <button onClick={handleSignout} className='p-5 rounded-lg bg-teal-700'>Signout </button>
    </div>
  )
}

export default Signout

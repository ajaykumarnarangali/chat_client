import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import {useAuthcontext} from './Authcontext'


export const socketContext=createContext();

function socketProvider({children}) {

    const [socket,setSocket]=useState(null);//that
    const [onlineUsers,setOnlineusers]=useState([]);

    const {currentUser}=useContext(useAuthcontext);

    useEffect(()=>{

      if(currentUser)
        {
          const socket=io('http://localhost:4000',{
            query:{
              userId:currentUser._id
            }
          });//this
          // console.log(socket)
          setSocket(socket);

          socket.on('Active_users',(users)=>{
            setOnlineusers(users)
          }) 
          return ()=>socket.close()
        }else{
          if(socket){//that
            socket.close();//this
            setSocket(null)
          }
        }
        
      },[currentUser])

  return <socketContext.Provider value={{socket,onlineUsers}}>
    {children}
  </socketContext.Provider>
}


export default socketProvider

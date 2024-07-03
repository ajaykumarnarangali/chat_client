import React, { useContext } from 'react'
import useConversation from '../store/useConversation'
import { socketContext } from '../context/socketProvider';



function Conversation({each}) {

    const {setSelectedConversation,selectedConversation}=useConversation()
    // const {currentUser}=useContext(useAuthcontext);

    // const isPending=messages?.every((each)=>each.isPending&&each.recieverId===currentUser._id)
    
    const isSelected=selectedConversation?._id===each._id;

    const {onlineUsers}=useContext(socketContext)

    const active=onlineUsers.includes(each._id)

    const hanldeSelectConversation=()=>{
        setSelectedConversation(each);
    }

    
    return (
        <>
            <div className={`flex gap-2 items-center ${isSelected?'bg-sky-500':''}  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`} onClick={hanldeSelectConversation}>
                <div className={`avatar ${active?'online':''}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={each?.profile}
                            alt='user avatar'
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{each?.username}</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1' />
        </>
    )
}



export default Conversation

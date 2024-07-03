import React, { useContext } from 'react'
import {useAuthcontext} from '../context/Authcontext'
import useConversation from '../store/useConversation'

function Message({message}) {
 
	const {currentUser}=useContext(useAuthcontext);
	const {selectedConversation}=useConversation()

	const fromMe=currentUser._id==message?.senderId;
    
	const side=fromMe?'justify-end':'justify-start'
	const Chatcolor=fromMe?'bg-blue-500':'bg-gray-500'
	const Profile=fromMe?currentUser?.profile:selectedConversation?.profile

  return (
    <div className={`flex ${side} w-full my-2`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={Profile} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${Chatcolor} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{message.createdAt}</div>
		</div>
  )
}

export default Message

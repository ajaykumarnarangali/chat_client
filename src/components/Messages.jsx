import React, { useEffect } from 'react'
import Message from './Message'
import useGetmessage from '../hooks/useGetmessage'
// import useConversation from '../store/useConversation'
import useGetSockmsg from '../hooks/useGetSockmsg';

function Messages() {

	const { messages } = useGetmessage();
	useGetSockmsg();

	return (
		<div className='px-4 flex-1 overflow-auto'>
            {
				messages.length>0 &&
				messages.map((message)=>{
					return (
						<Message key={message._id} message={message}/>
					)
				})
			}
		</div>
	)
}

export default Messages

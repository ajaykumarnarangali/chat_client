import Conversation from './Conversation'
import useGetuser from '../hooks/useGetuser'
import { useEffect, useState } from 'react'


function Conversations({searchTerm}) {
	const [conversation,setConversation]=useState([]);
	useEffect(()=>{
		const getUsers = async () => {
            try {
                const res = await fetch(`/api/user?searchTerm=${searchTerm}`);
                const data = await res.json();

                if (data.success == false) {
                    return
                }

                setConversation(data.users)

            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
	},[searchTerm])
	console.log(searchTerm)
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{
				conversation.length > 0 &&
				conversation.map((each) => {
					return <Conversation key={each._id} each={each} />
				})
			}
		</div>
	)
}

export default Conversations

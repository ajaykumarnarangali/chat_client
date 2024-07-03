import React, { useEffect } from 'react'
import useConversation from '../store/useConversation'

function useGetmessage() {

    const { selectedConversation, setMessages, messages } = useConversation();

    useEffect(() => {
        const Getmessage = async () => {
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);
                const data = await res.json();

                setMessages(data)

                if (data.success == false) {
                    console.log(data.message)
                    return
                }

            } catch (error) {
                console.log(error.message)
            }
        }

        if (selectedConversation._id) { Getmessage() }

    }, [selectedConversation])

    return { messages }

}

export default useGetmessage

import React, { useState } from 'react'
import useSendmessage from '../hooks/useSendmessage';
// import useConversation from '../store/useConversation';

function MessageInput() {

    const { sendMessage } = useSendmessage();
    const [ message, setMessage ] = useState();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(message)
        if (!message) {
            return
        }
        await sendMessage(message);
        setMessage('');
    }
    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full flex'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                />
                <button type='submit' className='flex justify-center items-center pe-3 bg-teal-700 rounded-lg'>
                    sent
                </button>
            </div>
        </form>
    )
}

export default MessageInput

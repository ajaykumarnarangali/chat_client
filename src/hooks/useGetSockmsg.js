import { useContext, useEffect } from 'react'
import useConversation from '../store/useConversation'
import { socketContext } from '../context/socketProvider'

function useGetSockmsg() {

    const { messages, setMessages } = useConversation();
    const { socket } = useContext(socketContext)

    useEffect(() => {
        // socket?.on('messages',(text)=>{
        //     console.log(text)
        //     setMessages([...messages,text])
        // })
        // // console.log(socket)
        // return ()=>socket?.off('messages')
        const handleMessage = (text) => {
            console.log(text)
            setMessages( [...messages, text]);
        };

        socket?.on('messages', handleMessage);

        return () => {
            socket?.off('messages', handleMessage);
        };
    }, [socket,messages])

}

export default useGetSockmsg

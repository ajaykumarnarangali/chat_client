import useConversation from "../store/useConversation";

function useSendmessage() {

    const { messages, setMessages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        try {
            const res = await fetch(`/api/message/send/${selectedConversation?._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            })
            const data = await res.json();

            if (data.success == false) {
                 return
            }

            setMessages([...messages,data.message])

        } catch (error) {
            console.log(error)
        }
    }

    return {sendMessage}

}

export default useSendmessage

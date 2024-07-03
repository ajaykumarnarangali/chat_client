// import { useEffect } from "react";
// import { useState } from "react"


// function useGetuser(searchTerm) {

//     const [conversation, setConversation] = useState([]);

//     useEffect(() => {

//         const getUsers = async () => {
//             try {
//                 const res = await fetch(`/api/user?searchTerm=${searchTerm}`);
//                 const data = await res.json();

//                 if (data.success == false) {
//                     return
//                 }

//                 setConversation(data.users)

//             } catch (error) {
//                 console.log(error)
//             }
//         }

//         getUsers()
//     }, [])

//     return { conversation,setConversation }
// }

// export default useGetuser

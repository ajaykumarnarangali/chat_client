import { useContext, useState } from "react";
import { toast } from "react-toastify";
import {useAuthcontext} from '../context/Authcontext'



function useSignup() {

    const {setCurrentuser}=useContext(useAuthcontext)
    const [loading, setLoading] = useState(false);

    const signUp = async ({ fullname, username, password, gender }) => {
        const success = handleError({ fullname, username, password, gender })
        if (!success) {
            return 
        }
        setLoading(true)
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullname, username, password, gender })
            })

            const data = await res.json();
            if (data.success == false) {
                toast.error(data.message);
                return 
            }
           //
           console.log(data)
             setCurrentuser(data.user)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, signUp }
}

export default useSignup


const handleError = ({ fullname, username, password, gender }) => {
    if (!fullname || !username || !password || !gender) {
        toast.warning("enter all the fields");
        return false
    }
    return true
}
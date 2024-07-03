import { useContext } from "react";
import { useAuthcontext } from '../context/Authcontext'

function useLogin() {

    const { setCurrentuser } = useContext(useAuthcontext)

    const Login = async ({ username, password }) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();
            if (data.success == false) {
                return
            }
            setCurrentuser(data.user);
        } catch (error) {
            console.log(error)
        }
    }

    return { Login }

}

export default useLogin

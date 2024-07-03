import { useState } from 'react'
import { toast } from 'react-toastify';

function useSignout() {

    const [loading, setLoading] = useState(false);

    const logOut = async () => {
        try {
            const res = await fetch('/api/auth/sign-out');
            const data = await res.json();

        } catch (error) {
            toast.warning(error.message);
        } finally {
            setLoading(false)
        }
    }

    return { logOut, loading }
}

export default useSignout

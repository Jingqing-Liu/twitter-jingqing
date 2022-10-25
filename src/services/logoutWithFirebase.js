import {
    auth,
    signOut,
} from '../firebase/config'

export const logoutWithFirebase = async ({ setMessage }) => {
    try {
        await signOut(auth)
    } catch (error) {
        if (setMessage) setMessage({ type: 'error', text: error.message })
    }
}
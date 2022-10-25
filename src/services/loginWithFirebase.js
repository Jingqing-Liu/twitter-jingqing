import {
    auth,
    signInWithEmailAndPassword,
} from '../firebase/config'


export const loginWithFirebase = async ({
    email,
    password,
    setMessage,
    setEmail,
    setPassword,
    setLoading,
}) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        setLoading(false)
        setEmail('')
        setPassword('')
        setMessage(error.message)
    }
}

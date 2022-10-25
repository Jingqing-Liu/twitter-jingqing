import {
    auth,
    sendPasswordResetEmail,
} from '../firebase/config'

export const sendResetPasswordWithFirebase = async ({
    email,
    setEmail,
    setMessage,
}) => {
    try {
        await sendPasswordResetEmail(auth, email)
            setMessage({
            type: 'success',
            text: 'The password reset link already sent to your email!',
        })
    } catch (error) {
        setMessage({ type: 'error', text: error.message })
        if (setEmail) setEmail('')
    }
}
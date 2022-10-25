import {
    db,
    collection,
    getDocs,
    setDoc,
    serverTimestamp,
    doc,
    query,
    where,
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from '../firebase/config'

export const signupWithFirebase = async ({
    email,
    password,
    name,
    username,
    setMessage,
    setLoading,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    setUsername,
}) => {
    try {
        const usernameResponse = await findUserByUsername(username)
        if (!usernameResponse) {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            await sendEmailVerification(user)
            await setDoc(doc(db, 'users', user.uid), {
                id: user.uid,
                email: email.trim(),
                name: name.trim(),
                username: username.toLowerCase().trim(),
                createdAt: serverTimestamp(),
                birthday: '',
                bio: '',
                avatarPhotoUrl: null,
                backgroundPhotoUrl: null,
                followers: [],
                following: [],
            })
        } else {
            throw new Error('Username already taken!')
        }
    } catch (error) {
        setMessage(error.message)
        setLoading(false)
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
        setUsername('')
    }
}


export const findUserByUsername = async (username) => {
    const lowerUsername = username.toLowerCase().trim()
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('username', '==', lowerUsername))
    const querySnapshot = await getDocs(q)
    const usernameResponse = querySnapshot.docs.map((item) => item.data())[0]
    return usernameResponse
}
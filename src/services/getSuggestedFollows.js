import {
    db,
    collection,
    getDocs,
    query,
    where,
    limit,
} from '../firebase/config'

export const getSuggestedFollows = async ({ user }) => {
    try {
        const usersRef = collection(db, 'users')
        const q = query(usersRef, where('id', '!=', user.id), limit(30))
        const response = await getDocs(q)
        const usersList = response.docs
            .map((user) => user.data())
            .filter((profile) => !user.following.includes(profile.id))
        return usersList
    } catch (error) {
        console.log(error.message)
    }
}
import {
  db,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  writeBatch,
} from '../firebase/config'

export const findUserByUsername = async (username) => {
  const lowerUsername = username.toLowerCase().trim()

  const usersRef = collection(db, 'users')
  const q = query(usersRef, where('username', '==', lowerUsername))
  const querySnapshot = await getDocs(q)

  const usernameResponse = querySnapshot.docs.map((item) => item.data())[0]

  return usernameResponse
}

export const saveChangesToUserPosts = async (user, data) => {
  try {
    let currentBatch = writeBatch(db)
    let currentBatchSize = 0
    const batches = [currentBatch]

    const postsRef = collection(db, 'posts')

    const q = query(postsRef, where('creatorId', '==', user.id))

    const querySnapshot = await getDocs(q)

    querySnapshot.docs.forEach((doc) => {
      if (++currentBatchSize >= 500) {
        currentBatch = writeBatch(db)
        batches.push(currentBatch)
        currentBatchSize = 1
      }

      currentBatch.update(doc.ref, {
        creatorName: data.name,
        creatorUsername: data.username,
      })
    })

    await Promise.all(batches.map((batch) => batch.commit()))
  } catch (error) {
    console.log(error.message)
  }
}

export const saveChangesToUser = async ({
  name,
  username,
  birthday,
  user,
  setMessage,
  setName,
  setUsername,
  setBirthday,
}) => {
  try {
    if (username === user.username) {
      const userRef = doc(db, 'users', user.id)

      await setDoc(userRef, { name, birthday }, { merge: true })

      await saveChangesToUserPosts(user, { name, username })

      return
    }

    const usernameResponse = await findUserByUsername(username)

    if (usernameResponse) {
      throw new Error("Username already taken, changes weren't saved!")
    }

    const userRef = doc(db, 'users', user.id)

    await setDoc(userRef, { name, username, birthday }, { merge: true })
    await saveChangesToUserPosts(user, { name, username })
  } catch (error) {
    setMessage({ type: 'error', text: error.message })
    setName(user.name)
    setUsername(user.username)
    setBirthday(user.birthday)
  }
}

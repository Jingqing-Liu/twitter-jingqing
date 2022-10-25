import { Layout } from '../Layout'
import { ProfileOrg, FollowsOrg } from '../org'
import { SimpleHeader, LoadingPage } from '../widgets'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/userContext'
import * as ROUTES from '../routes/routes'
import { useProfilePosts, useProfileLikedPosts } from '../../services/hooks'
import { useParams } from 'react-router'
import { findUserByUsername } from '../../services/signupWithFirebase'

export default function ProfileTemplate() {
  const [isOnFollows, setIsOnFollows] = useState(false)
  const [profileUser, setProfileUser] = useState()
  const { username } = useParams()

  const { user, setUser } = useContext(UserContext)
  const { posts: profilePosts, setPosts: setProfilePosts } = useProfilePosts(
    profileUser?.id
  )
  const { posts: likedPosts, setPosts: setLikedPosts } = useProfileLikedPosts(
    profileUser?.id
  )

  useEffect(() => {
    const getUser = async () => {
      const response = await findUserByUsername(username)
      setProfileUser(response)
      document.title = `${response.name.split(' ')[0]} (@${
        response.username
      }) / Twitter`
    }

    if (username) getUser()
  }, [username])

  return (
    <Layout
      setIsOnFollows={setIsOnFollows}
      isOnFollows={isOnFollows}
      user={user}
      showSearchBar={true}
      showSuggestion={true}
      profileUser={profileUser}
      setProfileUser={setProfileUser}
      setProfilePosts={setProfilePosts}
    >
      {!isOnFollows ? (
        <>
          <SimpleHeader
            withPosts={true}
            postsNumber={profilePosts.length}
            withArrow={true}
            arrowLink={ROUTES.HOME}
          >
            {profileUser?.name}
          </SimpleHeader>

          {profileUser ? (
            <ProfileOrg
              profileUser={profileUser}
              setProfileUser={setProfileUser}
              setUser={setUser}
              authUser={user}
              setProfilePosts={setProfilePosts}
              setLikedPosts={setLikedPosts}
              likedPosts={likedPosts}
              profilePosts={profilePosts}
              setIsOnFollows={setIsOnFollows}
            />
          ) : (
            <LoadingPage />
          )}
        </>
      ) : (
        <>
          <SimpleHeader
            withArrow={true}
            arrowLink={`/p/${username}`}
            withOnClick={true}
            OnClick={setIsOnFollows}
          >
            {profileUser?.name}
          </SimpleHeader>

          <FollowsOrg
            user={user}
            profileUser={profileUser}
            setProfileUser={setProfileUser}
            setIsOnFollows={setIsOnFollows}
            isOnFollows={isOnFollows}
          />
        </>
      )}
    </Layout>
  )
}

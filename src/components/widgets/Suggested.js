import { useContext, useEffect, useState } from 'react'
import './Suggested.css'
import { FollowUserCard } from '.'
import UserContext from '../context/userContext'
import { getSuggestedFollows } from '../../services/getSuggestedFollows'

export default function Suggested({
  bg,
  bottomBorder,
  setProfileUser,
  profileUser,
}) {
  const [suggestedUsers, setSuggestedUsers] = useState()
  const { user } = useContext(UserContext)

  useEffect(() => {
    const getSuggested = async () => {
      const follows = await getSuggestedFollows({ user })
      setSuggestedUsers(follows)
    }

    if (user) getSuggested()
  }, [user])

  return suggestedUsers && suggestedUsers.length > 0 ? (
    <article className='suggested'>
      <article className={`${bg} ${bottomBorder}`}>
        <h1 className="suggested-title">Who to follow</h1>
        {suggestedUsers
          ? suggestedUsers.map((suggestedUser, i) => {
              if (i <= 2)
                return (
                  <FollowUserCard
                    user={user}
                    setProfileUser={setProfileUser}
                    profileUser={profileUser}
                    suggestedUser={suggestedUser}
                    key={suggestedUser.id}
                  />
                )
              else return null
            })
          : null}
      </article>
    </article>
  ) : null
}

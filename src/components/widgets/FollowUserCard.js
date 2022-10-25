import './FollowUserCard.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FollowButton } from './'
import { UserInfo } from '.'
import { followUser, unFollowUser } from '../../services/followServices'

export default function FollowUserCard({
  suggestedUser,
  setProfileUser,
  profileUser,
  user,
  isOn,
  setIsOn,
}) {
  const [hoverUnfollow, setHoverUnfollow] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollow = async (e) => {
    e.stopPropagation()

    if (setProfileUser) {
      setProfileUser((prev) => {
        if (profileUser.id === user.id) {
          return { ...prev, following: [...prev.following, suggestedUser.id] }
        }

        return prev
      })
    }

    await followUser(user.id, suggestedUser.id, setIsFollowing)
  }

  const handleUnFollow = async (e) => {
    e.stopPropagation()

    if (setProfileUser) {
      setProfileUser((prev) => {
        if (profileUser.id === user.id) {
          return {
            ...prev,
            following: prev.following.filter(
              (item) => item !== suggestedUser.id
            ),
          }
        }

        return prev
      })
    }

    await unFollowUser(user.id, suggestedUser.id, setIsFollowing)
  }

  const handleLinkClick = () => {
    if (isOn) setIsOn(false)
  }

  useEffect(() => {
    if (user?.following.includes(suggestedUser?.id)) setIsFollowing(true)
  }, [suggestedUser, user])

  return (
    <div className='followusercard-div'>
      <Link onClick={handleLinkClick} to={`/p/${suggestedUser.username}`}>
        <UserInfo userNeeded={suggestedUser} />
      </Link>
      <div className="mightlike-follow-btn-container">
        {!isFollowing ? (
          user &&
          user.id !== suggestedUser.id && (
            <FollowButton isFollowing={false} onClick={handleFollow}>
              Follow
            </FollowButton>
          )
        ) : (
          <FollowButton
            onMouseEnter={() => setHoverUnfollow(true)}
            onMouseLeave={() => setHoverUnfollow(false)}
            isHoveringUnfollow={hoverUnfollow}
            isFollowing={true}
            onClick={handleUnFollow}
          >
            {hoverUnfollow ? 'Unfollow' : 'Following'}
          </FollowButton>
        )}
      </div>
    </div>
  )
}

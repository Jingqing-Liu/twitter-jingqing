import { useContext, useState, useEffect } from 'react'
import UserContext from '../context/userContext'
import './ProfileHeader.css'
import { ProfileInfo, ProfileNav, LoggedUserAvatar, ProfileBg, FollowButton, RegularButton, } from '../widgets'
import { followUser, unFollowUser } from '../../services/followServices'

export default function ProfileHeader({
  profileUser,
  setProfileUser,
  setIsOnLikes,
  isOnLikes,
  setIsOnFollows,
  setIsEditingProfile,
}) {
  const [hoverUnfollow, setHoverUnfollow] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const { user, setUser } = useContext(UserContext)

  const handleFollow = async () => {
    await followUser(user.id, profileUser.id, setIsFollowing)

    if (setUser) {
      setUser((prev) => ({
        ...prev,
        following: [...prev.following, profileUser.id],
      }))
    }
    if (setProfileUser) {
      setProfileUser((prev) => ({
        ...prev,
        followers: [...prev.followers, user.id],
      }))
    }
  }
  const handleUnFollow = async () => {
    await unFollowUser(user.id, profileUser.id, setIsFollowing)

    if (setUser) {
      setUser((prev) => ({
        ...prev,
        following: prev.following.filter((item) => item !== profileUser.id),
      }))
    }
    if (setProfileUser) {
      setProfileUser((prev) => ({
        ...prev,
        followers: prev.followers.filter((item) => item !== user.id),
      }))
    }
  }

  useEffect(() => {
    if (user?.following.includes(profileUser?.id)) setIsFollowing(true)
  }, [user, profileUser])

  return (
    <div className='profileheader-div'>
      <div className="profile-bg-container">
        <ProfileBg user={profileUser} />
      </div>

      <div className="profile-buttons-container">
        {user?.username === profileUser?.username ? (
          <div className="profile-edit-button">
            <RegularButton
              onClick={() => setIsEditingProfile(true)}
              color="white-grey"
            >
              Edit Profile
            </RegularButton>
          </div>
        ) : (
          <div className="profile-follow-button">
            {isFollowing ? (
              <FollowButton
                onMouseEnter={() => setHoverUnfollow(true)}
                onMouseLeave={() => setHoverUnfollow(false)}
                isHoveringUnfollow={hoverUnfollow}
                isFollowing={true}
                onClick={handleUnFollow}
              >
                {hoverUnfollow ? 'Unfollow' : 'Following'}
              </FollowButton>
            ) : (
              <div className="profile-follow">
                <FollowButton onClick={handleFollow} isFollowing={false}>
                  Follow
                </FollowButton>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="profile-avatar-container">
        <LoggedUserAvatar size="extra-larger" user={profileUser} />
      </div>

      <div className="profile-info-container">
        <ProfileInfo setIsOnFollows={setIsOnFollows} user={profileUser} />
      </div>

      <ProfileNav
        setIsOn={setIsOnLikes}
        isOn={isOnLikes}
        first="Tweets"
        second="Likes"
      />
    </div>
  )
}

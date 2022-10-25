import './ProfileInfo.css'
import { RiCalendar2Line } from 'react-icons/ri'
import { parseTimestamp } from './parseTimestamp'

export default function ProfileInfo({ user, setIsOnFollows }) {
  return (
    <div>
      <div className="name-and-username-container">
        <h2 className="profile-name">{user?.name}</h2>
        <h4 className="profile-username">@{user?.username}</h4>
      </div>

      <p className="bio">{user?.bio}</p>

      <div className="dates-container">
        <p>
          <RiCalendar2Line /> Joined {' '}
          {user && user.createdAt ? parseTimestamp(user?.createdAt) : null}
        </p>
      </div>

      <div className="follow-info-container">
        <p onClick={() => setIsOnFollows(true)}>
          <span>{user?.following?.length}</span> Following
        </p>
        <p onClick={() => setIsOnFollows(true)}>
          <span>{user?.followers?.length}</span> Followers
        </p>
      </div>
    </div>
  )
}

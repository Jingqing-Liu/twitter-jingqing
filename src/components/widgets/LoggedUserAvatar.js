import './LoggedUserAvatar.css'

export default function LoggedUserAvatar({ size, user }) {
  return (
    <img
      className={size}
      src={
        user?.avatarPhotoUrl
          ? `/images/avatars/${user.avatarPhotoUrl}.jpg`
          : '/images/avatars/default-avatar.png'
      }
      alt={user?.name}
    />
  )
}

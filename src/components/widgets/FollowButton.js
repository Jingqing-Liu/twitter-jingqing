import './FollowButton.css'

export default function FollowButton({
  isFollowing,
  isHoveringUnfollow,
  children,
  ...rest
}) {
  return (
    <button
      className={`${isFollowing ? 'following' : 'not-following'} ${
        isHoveringUnfollow ? 'unfollow' : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}

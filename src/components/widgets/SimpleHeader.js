import './SimpleHeader.css'

export default function SimpleHeader({
  withArrow,
  arrowLink,
  withOnClick,
  OnClick,
  withPosts,
  postsNumber,
  children,
}) {
  return (
    <header className='simpleheader'>
      <div className="header-text-container">
        <h1>{children}</h1>

        {withPosts && (
          <sub>{`${postsNumber} ${postsNumber !== 1 ? 'Posts' : 'Post'}`}</sub>
        )}
      </div>
    </header>
  )
}

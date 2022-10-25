import { LoggedUserAvatar, RegularButton } from './'
import './CreateCommentBox.css'

export default function CreateCommentBox({
  user,
  value,
  setValue,
  handleClick,
  isLoading,
}) {
  const isDisabled = value.length < 1 || value.length > 80 || isLoading

  return (
    <div className='createcommentbox-div'>
      <LoggedUserAvatar user={user} size="larger" />
      <input
        type="text"
        placeholder="Tweet your reply"
        maxLength="80"
        minLength="1"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className='createcommentbox-input'
      />
      <div className="comment-button-container">
        <RegularButton
          disabled={isDisabled}
          onClick={handleClick}
          isLoading={isLoading}
          color="blue"
        >
          Reply
        </RegularButton>
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { LoggedUserAvatar, RegularButton } from '../widgets'
import './PostBox.css'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import { createPost } from '../../services/postServices'
import { Link } from 'react-router-dom'

export default function PostBox({
  user,
  setOpenModal,
  profileUser,
  setProfilePosts,
  ...rest
}) {
  const [postValue, setPostValue] = useState('')
  const [emojiOpen, setEmojiOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef(null)

  const handlePost = async () => {
    setLoading(true)
    await createPost({
      user,
      postValue,
      setPostValue,
      setLoading,
      profileUser,
      setProfilePosts,
    })
    setLoading(false)

    if (setOpenModal) setOpenModal(false)
  }

  const autoSize = () => {
    textareaRef.current.style.height = '32px'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }

  const handleEmoji = (e) => {
    setPostValue((prev) => prev + e.native)
  }

  useEffect(() => {
    function close() {
      if (emojiOpen) setEmojiOpen(false)
    }

    window.addEventListener('click', close)

    return () => window.removeEventListener('click', close)
  }, [emojiOpen])

  const isDisabled =
    postValue.length >= 1 && postValue.length <= 180 && !loading ? false : true

  return (
    <div {...rest} className='postboxdiv'>
      <div className="box-avatar-container">
        <Link to={`/p/${user?.username}`}>
          <LoggedUserAvatar size="larger" user={user} />
        </Link>
      </div>

      <div className="box-post-container">
        <div className="box-input-container">
          <textarea
            ref={textareaRef}
            rows="1"
            placeholder="What's happening?"
            minLength="1"
            maxLength="180"
            value={postValue}
            onChange={({ target }) => {
              setPostValue(target.value)
              autoSize()
            }}
            className='postbox-testarea'
          />
        </div>

        <div className="box-options-container">
          <div className="box-post-button-container">
            <RegularButton
              isLoading={loading}
              onClick={handlePost}
              disabled={isDisabled}
              color="blue"
            >
              Tweet
            </RegularButton>
          </div>
        </div>
      </div>
      {emojiOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <Picker
            onSelect={handleEmoji}
            style={{ position: 'absolute', bottom: '-280%', zIndex: '10' }}
          />
        </div>
      )}
    </div>
  )
}

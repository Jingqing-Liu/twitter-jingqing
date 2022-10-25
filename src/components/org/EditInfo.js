import './EditInfo.css'
import { SimpleHeader, RegularButton, SpecialInput, AuthMessage } from '../widgets'
import { useEffect, useState } from 'react'
import { saveChangesToUser } from '../../services/saveChangesToUser'

export default function EditInfo({ user }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [birthday, setBirthday] = useState('')
  const [isLoading, setIsLoading] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })

  const isDisabled =
    (name === user.name &&
      username === user.username &&
      birthday === user.birthday) ||
    isLoading

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isLoading) return

    setIsLoading(true)
    setMessage({ type: '', text: '' })

    await saveChangesToUser({
      birthday,
      name,
      username,
      user,
      setMessage,
      setName,
      setUsername,
      setBirthday,
    })

    setIsLoading(false)
  }

  useEffect(() => {
    if (user) {
      setName(user.name)
      setUsername(user.username)
      setBirthday(user.birthday)
    }
  }, [user])

  return (
    <>
      <SimpleHeader>
        Edit Account Information
      </SimpleHeader>

      <div className='editinfo'>
        <form onSubmit={handleSubmit} className='editinfoform'>
          <SpecialInput
            type="text"
            placeholder="Name"
            maxLength="30"
            minLength="3"
            inputValue={name}
            setInputValue={setName}
          />

          <SpecialInput
            type="text"
            placeholder="Username"
            maxLength="18"
            minLength="2"
            inputValue={username}
            setInputValue={setUsername}
          />

          <SpecialInput
            type="date"
            placeholder="Date of birth"
            inputValue={birthday}
            setInputValue={setBirthday}
          />

          <div className='buttoncontainer'>
            <RegularButton
              isLoading={isLoading}
              disabled={isDisabled}
              color="blue"
            >
              Save
            </RegularButton>
          </div>
        </form>
      </div>

      {message.text && <AuthMessage text={message.text} type={message.type} />}
    </>
  )
}

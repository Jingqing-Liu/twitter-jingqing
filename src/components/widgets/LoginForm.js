import { useState } from 'react'
import './LoginForm.css'
import { BigButton, SpecialInput } from './'
import { loginWithFirebase } from '../../services/loginWithFirebase'

export default function LoginForm({ setMessage }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const isDisabled =
    email.length > 7 && password.length > 5 && !loading ? false : true

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    await loginWithFirebase({
      email,
      password,
      setMessage,
      setEmail,
      setPassword,
      setLoading,
    })
  }

  return (
    <form onSubmit={handleSubmit} className='loginform-form'>
      <div className="login-special-input-container">
        <SpecialInput
          type="email"
          placeholder="E-mail"
          maxLength="40"
          minLength="8"
          inputValue={email}
          setInputValue={setEmail}
        />
      </div>
      <div className="login-special-input-container">
        <SpecialInput
          type="password"
          placeholder="Password"
          maxLength="15"
          minLength="6"
          inputValue={password}
          setInputValue={setPassword}
        />
      </div>

      <BigButton
        isLoading={loading}
        disabled={isDisabled}
        type="submit"
        color="blue"
      >
        Log in
      </BigButton>
    </form>
  )
}

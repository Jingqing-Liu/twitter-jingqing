import { useState } from 'react'
import './ResetPasswordForm.css'
import { BigButton, SpecialInput } from './'
import { sendResetPasswordWithFirebase } from '../../services/sendResetPasswordWithFirebase'

export default function ResetPasswordForm({ setMessage }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState('')

  const isDisabled = email.length > 7 && !loading ? false : true

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    await sendResetPasswordWithFirebase({
      email,
      setEmail,
      setMessage,
    })

    setLoading(false)
  }

  return (
    <form className="ResetPasswordForm" onSubmit={handleSubmit}>
      <div className="reset-special-input-container">
        <SpecialInput
          type="email"
          placeholder="E-mail"
          maxLength="40"
          minLength="8"
          inputValue={email}
          setInputValue={setEmail}
        />
      </div>

      <BigButton
        isLoading={loading}
        disabled={isDisabled}
        type="submit"
        color="blue"
      >
        Reset Password
      </BigButton>
    </form>
  )
}

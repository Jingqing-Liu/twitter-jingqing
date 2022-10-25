import './ResetPasswordOrg.css'
import { ResetPasswordForm, Logo, AuthTitle, AuthLink, AuthMessage } from '../widgets'
import * as ROUTES from '../routes/routes'
import { useState } from 'react'

export default function ResetPasswordOrg() {
  const [message, setMessage] = useState({ type: '', text: '' })

  return (
    <section className="resetpassword-section">
      <div className="reset-logo-container">
        <Logo />
      </div>

      <div className="reset-auth-title-container">
        <AuthTitle>Reset Password</AuthTitle>
      </div>

      <div className="reset-form-container">
        <ResetPasswordForm setMessage={setMessage} />
      </div>

      <div className="reset-links-container">
        <AuthLink to={ROUTES.LOGIN}>Log In to Postr</AuthLink>
      </div>

      {message && (
        <div className="reset-error-container">
          <AuthMessage type={message.type} text={message.text} />
        </div>
      )}
    </section>
  )
}

import './SignupOrg.css'
import { SignupForm, Logo, AuthTitle, AuthLink, AuthMessage } from '../widgets'
import * as ROUTES from '../routes/routes'
import { useState } from 'react'

export default function SignupOrg() {
  const [error, setError] = useState()

  return (
    <section className="signuporg-section">
      <div className="signup-logo-container">
        <Logo />
      </div>

      <div className="signup-auth-title-container">
        <AuthTitle>Sign Up for Twitter</AuthTitle>
      </div>

      <div className="signup-form-container">
        <SignupForm setMessage={setError} />
      </div>

      <div className="signup-links-container">
        <AuthLink to={ROUTES.LOGIN}>Log In to Twitter</AuthLink>
      </div>

      {error && (
        <div className="signup-error-container">
          <AuthMessage type="error" text={error} />
        </div>
      )}
    </section>
  )
}

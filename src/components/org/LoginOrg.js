import './LoginOrg.css'
import { BigButton, Logo, AuthTitle, AuthLink, AuthMessage, LoginForm } from '../widgets'
import * as ROUTES from '../routes/routes'
import { useState } from 'react'

export default function LoginOrg() {
  const [error, setError] = useState()

  return (
      <section className='loginorg-section'>
        <div className="login-logo-container">
          <Logo />
        </div>

        <div className="login-auth-title-container">
          <AuthTitle>Log In to Twitter</AuthTitle>
        </div>

        <div className="login-form-container">
          <LoginForm setMessage={setError} />
        </div>

        <AuthLink to={ROUTES.RESET_PASSWORD}>
          <BigButton color="white" className='changepost'>
            Forgot Password?
          </BigButton>
        </AuthLink>

        <span>
          Don't have an account? 
          <AuthLink to={ROUTES.SIGNUP}> Sign up </AuthLink>
        </span>

        {error && (
          <div className="login-error-container">
            <AuthMessage type="error" text={error} />
          </div>
        )}
      </section>
  )
}

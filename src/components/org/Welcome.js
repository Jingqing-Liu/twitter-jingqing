import { Logo, BigButton } from '../widgets'
import './Welcome.css'
import { Link } from 'react-router-dom'
import * as ROUTES from '../routes/routes'

export default function Welcome() {
  return (
    <section className='welcome-section'>
      <div className="start-logo-container">
        <Logo />
      </div>

      <div className="start-text-container">
        <h1>Happening now</h1>
      </div>

      <div className="start-sub-container">
        <h3>Join Twitter today.</h3>

        <Link to={ROUTES.SIGNUP}>
          <BigButton color="blue">Sign up with email</BigButton>
        </Link>

        <div className="Agreement">
          By signing up, you agree to the Terms of Service and Privacy Policy.
        </div>

        <h4>
          Already have an account?
        </h4>

        <Link to={ROUTES.LOGIN}>
          <BigButton color="white">Log in</BigButton>
        </Link>

      </div>
    </section>
  )
}

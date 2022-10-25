import { Footer } from '../widgets'
import { Welcome } from '../org'
import './StartTemplate.css'

export default function StartTemplate() {
  return (
    <>
      <main className='starttemplate'>
        <div className="start-img-container">
          <img src="/images/welcomepage/WelcomePageBackground.jpg" alt="Twitter" />
          <div className="BigTwitterLogo">
            <img src="/images/welcomepage/TwitterLogoWhite.jpg" alt="Twitter Logo" />
          </div>
        </div>
        <div className="start-welcome-container">
          <Welcome />
        </div>
      </main>

      <Footer />
    </>
  )
}

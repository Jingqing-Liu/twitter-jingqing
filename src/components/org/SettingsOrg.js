import { useState } from 'react'
import './SettingsOrg.css'
import { SimpleHeader, AuthMessage, SettingsButton } from '../widgets'
import { sendResetPasswordWithFirebase } from '../../services/sendResetPasswordWithFirebase'
import * as ROUTES from '../routes/routes'
import { Link, useHistory } from 'react-router-dom'

export default function SettingsOrg({ user }) {
  const [message, setMessage] = useState({
    type: '',
    text: '',
  })
  const history = useHistory()

  const handleReset = async () => {
    await sendResetPasswordWithFirebase({ email: user.email, setMessage })
    history.push(ROUTES.SETTINGS_RESET)
  }

  return (
    <div className='settingsorg-div'>
      <SimpleHeader>Settings</SimpleHeader>
      <Link to={ROUTES.SETTINGS_EDIT}>
        <div className="settings-info-container">
          <SettingsButton>Change my information</SettingsButton>
        </div>
      </Link>

      <div onClick={handleReset} className="settings-reset-container">
        <SettingsButton>Change my password</SettingsButton>
      </div>

      {message && (
        <div className="settings-error">
          <AuthMessage type={message.type} text={message.text} />
        </div>
      )}
    </div>
  )
}

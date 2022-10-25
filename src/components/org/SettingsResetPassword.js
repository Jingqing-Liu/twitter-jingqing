import './SettingsResetPassword.css'
import { SimpleHeader } from '../widgets'

export default function SettingsResetPassword() {
  return (
    <>
      <SimpleHeader>
        Change my password
      </SimpleHeader>
      <p className='settingsresetpassword-message'>
        You'll receive a code to verify here so you can reset your account password.
      </p>
    </>
  )
}

import { useEffect } from 'react'
import { ResetPasswordTemplate } from '../components/templates'

export default function ResetPassword() {
  useEffect(() => {
    document.title = 'Reset Password / Twitter'
  }, [])
  return <ResetPasswordTemplate />
}

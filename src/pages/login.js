import { useEffect } from 'react'
import { LoginTemplate } from '../components/templates'

export default function Login() {
  useEffect(() => {
    document.title = 'Log In / Twitter'
  }, [])
  return <LoginTemplate />
}

import { useEffect } from 'react'
import { SignupTemplate } from '../components/templates'

export default function Signup() {
  useEffect(() => {
    document.title = 'Sign Up / Twitter'
  }, [])
  return <SignupTemplate />
}

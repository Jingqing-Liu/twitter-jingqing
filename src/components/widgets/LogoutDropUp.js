import { useEffect } from 'react'
import './LogoutDropUp.css'
import { logoutWithFirebase } from '../../services/logoutWithFirebase'

export default function LogoutDropUp({ userNeeded, setLogoutDrop }) {
  const handleLogout = async () => {
    await logoutWithFirebase({ setMessage: null })
  }

  useEffect(() => {
    const handleClose = (e) => {
      const dropUp = document.querySelector('.user-drop-up')

      if (e.target !== dropUp) setLogoutDrop(false)
    }

    window.addEventListener('click', handleClose)

    return () => window.removeEventListener('click', handleClose)
  }, [setLogoutDrop])

  return (
    <div className="user-drop-up">
      <p onClick={handleLogout}>Log out of @{userNeeded?.username}</p>
    </div>
  )
}

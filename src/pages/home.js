import { useEffect } from 'react'
import { HomeTemplate } from '../components/templates'

export default function Home() {
  useEffect(() => {
    document.title = 'Home / Twitter'
  }, [])
  return <HomeTemplate />
}

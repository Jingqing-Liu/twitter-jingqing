import { useEffect } from 'react'
import { PostTemplate } from '../components/templates'

export default function Post() {
  useEffect(() => {
    document.title = 'Tweet | Twitter'
  }, [])
  return <PostTemplate />
}

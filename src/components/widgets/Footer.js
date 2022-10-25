import './Footer.css'
import { AiOutlineGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='footer-style'>
      <p>
        Twitter-clone created by{' '}
        <a href="https://github.com/Jingqing-Liu">
          <AiOutlineGithub /> Jingqing Liu
        </a>
      </p>
    </footer>
  )
}

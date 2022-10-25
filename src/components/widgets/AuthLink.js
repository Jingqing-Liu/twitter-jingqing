import { Link } from 'react-router-dom'
import './AuthLink.css'

export default function AuthLink({ children, ...rest }) {
  return <Link className='link' {...rest}>{children}</Link>
}

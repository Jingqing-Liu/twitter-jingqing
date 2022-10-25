import './Logo.css'
import { Link } from 'react-router-dom'
import * as ROUTES from '../routes/routes'

export default function Logo({ noLink }) {
  const ImageComp = <img src="/images/logo.png" alt="Twiter Logo" />

  if (noLink) return ImageComp

  return <Link to={ROUTES.HOME}>{ImageComp}</Link>
}

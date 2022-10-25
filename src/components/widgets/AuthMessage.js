import './AuthMessage.css'

export default function AuthMessage({ type, text }) {
  return (
    <div className='p'>
      <p className={type}>{text}</p>
    </div>
  )
}

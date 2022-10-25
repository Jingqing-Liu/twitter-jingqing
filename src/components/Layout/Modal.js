import './Modal.css'

export default function Modal({ children, ...rest }) {
  return <div {...rest} className='modalbg'>{children}</div>
}

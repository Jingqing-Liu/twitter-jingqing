import './BigButton.css'
import { Spinner } from '.'
import { RiAddBoxFill } from 'react-icons/ri'

export default function BigButton({ children, color, isLoading, ...rest }) {
  return (
    <button {...rest} className={`btn-${color}`}>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="post">
            <RiAddBoxFill />
          </div>
          <span>{children}</span>
        </>
      )}
    </button>
  )
}

import './RegularButton.css'
import { Spinner } from '.'

export default function RegularButton({ children, color, isLoading, ...rest }) {
  return (
    <button {...rest} className={`regular-${color} `}>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </button>
  )
}

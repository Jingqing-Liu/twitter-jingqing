import './SettingsButton.css'
import { Spinner } from '.'

export default function SettingsButton({ isDelete, isLoading, children }) {
  return (
    <button disabled={isLoading} className={isDelete && 'delete-account'}>
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

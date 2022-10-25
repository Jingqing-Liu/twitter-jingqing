import { Spinner } from './'
import './SuspenseFallback.css'


export default function SuspenseFallback() {
  return (
    <main className='suspensefallback'>
      <div className="spinner-container">
        <Spinner />
      </div>
    </main>
  )
}

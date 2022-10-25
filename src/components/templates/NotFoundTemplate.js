import './NotFoundTemplate.css'

export default function NotFoundTemplate() {
  return (
    <main className='notfoundtemplate'>
      <img src="/images/svgs/not-found.svg" alt="404 - page not found!" />

      <p className="not-found-text">
        Hmm...this page doesn’t exist. Try searching for something else.
      </p>
    </main>
  )
}

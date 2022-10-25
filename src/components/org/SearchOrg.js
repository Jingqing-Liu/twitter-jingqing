import { useEffect, useState } from 'react'
import './SearchOrg.css'
import { SearchBar, SearchResult } from '.'
import { ProfileNav } from '../widgets'

export default function SearchOrg({ searchTerm, setSearchTerm, user }) {
  const [result, setResult] = useState()

  useEffect(() => {
    return () => setSearchTerm('')
  }, [setSearchTerm])

  return (
    <div className='searchorg-div'>
      <div className="search-page-header">
        <div className="search-bar-container">

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            noRedirect={true}
          />
        </div>
        <ProfileNav first="People" isSingle={true} />
      </div>
      <div className="search-page-results">
        <SearchResult
          user={user}
          searchTerm={searchTerm}
          result={result}
          setResult={setResult}
        />
      </div>
    </div>
  )
}

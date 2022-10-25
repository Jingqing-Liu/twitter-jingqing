import { useEffect } from 'react'
import './SearchResult.css'
import { FollowUserCard } from '../widgets'
import { getSearchResult } from '../../services/UserServices'


export default function SearchResult({ searchTerm, result, setResult, user }) {
  useEffect(() => {
    const receiveResult = async () => {
      const response = await getSearchResult(searchTerm)
      setResult(response)
    }

    if (searchTerm) receiveResult()
  }, [searchTerm, setResult])

  return (
    <div>
      {result && result[0] ? (
        result.map((item) => (
          <FollowUserCard key={item.id} suggestedUser={item} user={user} />
        ))
      ) : result === undefined ? (
        <div className="search-message">
          <p>Search for an username!</p>
        </div>
      ) : (
        <div className="search-message">
          <p>There were no results for you search!</p>
        </div>
      )}
    </div>
  )
}

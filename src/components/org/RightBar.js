import { useContext } from 'react'
import SearchContext from '../context/searchContext'
import './RightBar.css'
import { SearchBar } from '.'
import { Suggested } from '../widgets'

export default function RightBar({
  showSearchBar,
  showSuggestion,
  setProfileUser,
  profileUser,
}) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  return (
    <section className='rightBar-section'>
      {showSearchBar && (
        <div className="rightbar-search-container">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      )}

      {showSuggestion && (
        <div className="rightbar-suggested-container">
          <Suggested
            setProfileUser={setProfileUser}
            profileUser={profileUser}
          />
        </div>
      )}
    </section>
  )
}

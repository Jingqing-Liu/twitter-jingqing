import './SearchBar.css'
import { IoSearchOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import * as ROUTES from '../routes/routes'

export default function SearchBar({ searchTerm, setSearchTerm, noRedirect }) {
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)
  const history = useHistory()

  const handleSearch = () => {
    setSearchTerm(searchValue)
    if (!noRedirect) history.push(ROUTES.SEARCH)
  }

  useEffect(() => {
    if (searchTerm) setSearchValue(searchTerm)
  }, [searchTerm])

  return (
    <div className='searchbar-div' onClick={() => inputRef.current.focus()}>
      <IoSearchOutline />

      <input
        className='searchbar-input'
        aria-label="Search a user by his username"
        ref={inputRef}
        type="text"
        maxLength="50"
        value={searchValue}
        onChange={({ target: { value } }) =>
          setSearchValue(value.toLowerCase())
        }
        placeholder="Search Twitter"
        onKeyDown={(e) => {
          if ((e.code === 'Enter' || e.which === 13) && searchValue) {
            handleSearch()
          }
        }}
      />
    </div>
  )
}

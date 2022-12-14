import { Layout } from '../Layout'
import { SearchOrg } from '../org'
import { useContext } from 'react'
import UserContext from '../context/userContext'
import SearchContext from '../context/searchContext'

export default function SearchTemplate() {
  const { user } = useContext(UserContext)
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  return (
    <Layout user={user} showSuggestion={true}>
      <SearchOrg
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        user={user}
      />
    </Layout>
  )
}

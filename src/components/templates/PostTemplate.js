import { Layout } from '../Layout'
import { PostOrg } from '../org'
import { SimpleHeader } from '../widgets'

import { useContext } from 'react'
import UserContext from '../context/userContext'

import * as ROUTES from '../routes/routes'

export default function PostTemplate() {
  const { user } = useContext(UserContext)

  return (
    <Layout user={user} showSearchBar={true} showSuggestion={true}>
      <SimpleHeader withArrow={true} arrowLink={ROUTES.HOME}>
        Tweet
      </SimpleHeader>
      <PostOrg user={user} />
    </Layout>
  )
}

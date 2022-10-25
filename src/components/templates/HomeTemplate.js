import { useContext } from 'react'
import UserContext from '../context/userContext'
import { Layout } from '../Layout'
import { Timeline, PostBox } from '../org'
import { NoPosts, SimpleHeader } from '../widgets'
import { useFollowedPosts } from '../../services/hooks'

export default function HomeTemplate() {
  const { user } = useContext(UserContext)
  const { posts, setPosts } = useFollowedPosts(user)

  return (
    <Layout user={user} showSearchBar={true} showSuggestion={true}>
      <SimpleHeader>Home</SimpleHeader>
      <PostBox className="home-post-box" user={user} />
      {posts && posts.length > 0 ? (
        <Timeline posts={posts} setPosts={setPosts} />
      ) : (
        <NoPosts>Follow someone to see their Tweets!</NoPosts>
      )}
    </Layout>
  )
}

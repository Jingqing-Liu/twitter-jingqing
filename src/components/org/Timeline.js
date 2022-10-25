import './Timeline.css'
import { PostCard } from '../widgets'

export default function Timeline({
  posts,
  isOnProfile,
  setPosts,
  setLikedPosts,
  profileUser,
}) {
  return (
    <section className='timelinesection'>
      {posts &&
        posts.map((post) => (
          <PostCard
            profileUser={profileUser}
            setPosts={setPosts}
            setLikedPosts={setLikedPosts}
            isOnProfile={isOnProfile}
            post={post}
            key={post.id}
          />
        ))}
    </section>
  )
}

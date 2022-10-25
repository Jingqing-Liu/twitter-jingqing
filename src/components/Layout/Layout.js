import './Layout.css'
import { LeftBar, RightBar, PostBoxModal } from '../org'
import { useState } from 'react'

export default function LoggedInLayout({
  showSearchBar,
  showSuggestion,
  user,
  isOnFollows,
  setIsOnFollows,
  setProfileUser,
  profileUser,
  setProfilePosts,
  children,
}) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <main>
        <main className='loggedinlayout-main'>
          <div className="layout-left-sidebar-container">
            <div className="inner-left-bar">
              <LeftBar
                isOnFollows={isOnFollows}
                setIsOnFollows={setIsOnFollows}
                setOpenModal={setOpenModal}
                user={user}
              />
            </div>
          </div>

          <div className="layout-main-section-container">{children}</div>

          <div className="layout-right-sidebar-container">
            <div className="inner-right-bar">
              <RightBar
                showSearchBar={showSearchBar}
                showSuggestion={showSuggestion}
                setProfileUser={setProfileUser}
                profileUser={profileUser}
              />
            </div>
          </div>
        </main>

        {openModal && (
          <PostBoxModal
            user={user}
            profileUser={profileUser}
            setProfilePosts={setProfilePosts}
            setOpenModal={setOpenModal}
          />
        )}
      </main>
    </>
  )
}

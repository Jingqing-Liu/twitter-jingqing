import { PostBox } from '../org'
import { Modal } from '../Layout'
import { IoClose } from 'react-icons/io5'

export default function PostBoxModal({
  setOpenModal,
  user,
  profileUser,
  setProfilePosts,
}) {
  return (
    <Modal onClick={() => setOpenModal(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-post-box-container"
      >
        <div className="modal-post-box-header">
          <div
            onClick={() => setOpenModal(false)}
            className="modal-close-post-box"
          >
            <IoClose />
          </div>
        </div>
        <PostBox
          setOpenModal={setOpenModal}
          style={{ border: 'none' }}
          user={user}
          profileUser={profileUser}
          setProfilePosts={setProfilePosts}
        />
      </div>
    </Modal>
  )
}

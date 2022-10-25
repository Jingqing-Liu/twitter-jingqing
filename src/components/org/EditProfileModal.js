import { useEffect, useState } from 'react'
import './EditProfileModal.css'
import { IoClose } from 'react-icons/io5'
import { Picker, ProfileTextChanger, RegularButton } from '../widgets'
import { Modal } from '../Layout'
import { saveProfileChanges } from '../../services/UserServices'
import avatarData from '../widgets/avatars'
import backgroundsData from '../widgets/backgrounds'

export default function EditProfileModal({
  setIsEditingProfile,
  authUser,
  setUser,
  setProfileUser,
  setProfilePosts,
  setLikedPosts,
}) {
  const [avatar, setAvatar] = useState('')
  const [background, setBackground] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    if (isLoading) return
    if (
      avatar === authUser.avatarPhotoUrl &&
      background === authUser.backgroundPhotoUrl &&
      name === authUser.name &&
      bio === authUser.bio
    ) {
      return
    }

    setIsLoading(true)

    await saveProfileChanges(authUser, { avatar, background, name, bio })

    setUser((prev) => ({
      ...prev,
      avatarPhotoUrl: avatar,
      backgroundPhotoUrl: background,
      name: name,
      bio: bio,
    }))

    setProfileUser((prev) => ({
      ...prev,
      avatarPhotoUrl: avatar,
      backgroundPhotoUrl: background,
      name: name,
      bio: bio,
    }))

    setProfilePosts((prev) => {
      const withoutUserPosts = prev.filter(
        (post) => post.creatorId !== authUser.id
      )
      const userPosts = prev
        .filter((post) => post.creatorId === authUser.id)
        .map((post) => ({ ...post, creatorAvatar: avatar, creatorName: name }))

      const shuffledPosts = [...withoutUserPosts, ...userPosts]

      return shuffledPosts.sort((a, b) => b.createdAt - a.createdAt)
    })

    setLikedPosts((prev) => {
      const withoutUserPosts = prev.filter(
        (post) => post.creatorId !== authUser.id
      )
      const userPosts = prev
        .filter((post) => post.creatorId === authUser.id)
        .map((post) => ({ ...post, creatorAvatar: avatar, creatorName: name }))

      const shuffledPosts = [...withoutUserPosts, ...userPosts]

      return shuffledPosts.sort((a, b) => b.createdAt - a.createdAt)
    })

    setIsLoading(false)

    setIsEditingProfile(false)
  }

  useEffect(() => {
    if (authUser) {
      setAvatar(authUser.avatarPhotoUrl)
      setBackground(authUser.backgroundPhotoUrl)
      setName(authUser.name)
      setBio(authUser.bio)
    }
  }, [authUser])

  const isDisabled = name.length <= 2 || isLoading

  return (
    <Modal onClick={() => setIsEditingProfile(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-post-box-container"
      >
        <div className="modal-post-box-header edit-profile">
          <div
            onClick={() => setIsEditingProfile(false)}
            className="modal-close-post-box"
          >
            <IoClose />
          </div>

          <div className="button-container">
            <RegularButton
              onClick={handleSave}
              disabled={isDisabled}
              color="black"
              isLoading={isLoading}
            >
              Save
            </RegularButton>
          </div>
        </div>

        <div className='pickerchooce'>
          <Picker
            title="Select your avatar:"
            imagesData={avatarData}
            type="avatars"
            picked={avatar}
            setPicked={setAvatar}
          />

          <Picker
            title="Select you profile background:"
            imagesData={backgroundsData}
            type="backgrounds"
            picked={background}
            setPicked={setBackground}
          />

          <ProfileTextChanger
            name={name}
            bio={bio}
            setName={setName}
            setBio={setBio}
          />
        </div>
      </div>
    </Modal>
  )
}

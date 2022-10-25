import './ProfileTextChanger.css'
import { SpecialInput } from './'

export default function ProfileTextChanger({ name, bio, setName, setBio }) {
  return (
    <div className='profiletextchanger-dv'>
      <div className="profile-change-input-container">
        <SpecialInput
          className="name-input change-profile"
          inputValue={name ? name : ''}
          setInputValue={setName}
          placeholder="Name"
          minLength="3"
          maxLength="30"
          required
        />

        <div className="chars-number">{name.length}/30</div>
      </div>

      <div className="profile-change-input-container">
        <SpecialInput
          className="bio-input change-profile"
          inputValue={bio ? bio : ''}
          setInputValue={setBio}
          placeholder="Bio"
          isTextarea={true}
          maxLength="160"
        />

        <div className="chars-number">{bio.length}/160</div>
      </div>
    </div>
  )
}

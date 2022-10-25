import './Options.css'
import { BsThreeDots } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { SettingsButton } from './'
import { useEffect, useState } from 'react'

export default function Options({ destroy }) {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const handleDelete = async () => {
    await destroy()
  }

  useEffect(() => {
    const closeDropDown = () => {
      setDropDownOpen(false)
    }

    if (dropDownOpen) window.addEventListener('click', closeDropDown)

    return () => window.removeEventListener('click', closeDropDown)
  }, [dropDownOpen])

  return (
    <div className='options-div' onClick={(e) => e.stopPropagation()}>
      <div
        onClick={() => setDropDownOpen((prev) => !prev)}
        className="options-icon-container"
      >
        <BsThreeDots />
      </div>
      {dropDownOpen && (
        <div onClick={handleDelete} className="options-drop-down">
          <SettingsButton isDelete={true}>
            <BiTrash /> Delete
          </SettingsButton>
        </div>
      )}
    </div>
  )
}

import './LeftBarListItem.css'
import { NavLink } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

export default function LeftBarListItem({ icons, children, to, ...rest }) {
  const [active, setActive] = useState(false)
  let navLinkRef = useRef(null)

  useEffect(() => {
    if (navLinkRef.current && navLinkRef.current.className === 'active')
      setActive(true)
  }, [navLinkRef])

  return (
    <NavLink
      {...rest}
      ref={(el) => {
        navLinkRef.current = el
      }}
      exact
      to={to}
      activeStyle={{ fontWeight: 'bold' }}
    >
      <li>
        {active ? icons.fill : icons.outline}
        <p>{children}</p>
      </li>
    </NavLink>
  )
}

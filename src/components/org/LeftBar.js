import React from 'react';
import './LeftBar.css'
import { Link } from 'react-router-dom'
import { UserInfo, LogoutDropUp, Logo, LeftBarListItem, BigButton } from '../widgets'
import * as ROUTES from '../routes/routes'
import { BsThreeDots } from 'react-icons/bs'
import { BiHomeCircle } from "react-icons/bi";
import { RiHome7Fill } from "react-icons/ri";
import { AiOutlineNumber } from 'react-icons/ai'
import { BsPerson, BsFillPersonFill } from 'react-icons/bs'
import { CiCircleMore } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  .leftbar-big-button-container {
    @media (max-width: 1200px) {
      .post {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
      }
    }
  }
`

export default function LeftBar({
  user,
  setOpenModal,
  isOnFollows,
  setIsOnFollows,
}) {
  const [logoutDrop, setLogoutDrop] = useState(false)

  const handleLinkClick = () => {
    if (isOnFollows) {
      setIsOnFollows(false)
    }
  }

  return (
    <Container>
    <section className='leftbar-section'>
      <div className="leftbar-logo-container">
        <Link to={ROUTES.HOME}>
          <div className="leftbar-logo">
            <Logo noLink={true} />
          </div>
        </Link>
      </div>

      <ul className='leftbar-list'>
        <LeftBarListItem
          to={ROUTES.HOME}
          icons={{ outline: BiHomeCircle(), fill: RiHome7Fill() }}
        >
          Homepage
        </LeftBarListItem>

        <LeftBarListItem
          to={ROUTES.SEARCH}
          icons={{ outline: AiOutlineNumber(), fill: AiOutlineNumber() }}
        >
          Explore
        </LeftBarListItem>

        <LeftBarListItem
          onClick={handleLinkClick}
          to={`/p/${user?.username}`}
          icons={{ outline: BsPerson(), fill: BsFillPersonFill() }}
        >
          Profile
        </LeftBarListItem>
        <LeftBarListItem
          to={ROUTES.SETTINGS}
          icons={{ outline: CiCircleMore(), fill: CgMoreO() }}
        >
          More
        </LeftBarListItem>
      </ul>

      <div className="leftbar-big-button-container">
        <BigButton onClick={() => setOpenModal(true)} color="blue">
          Tweet
        </BigButton>
      </div>

      <div className="leftbar-drop-user-card-container">
        <div
          onClick={() => setLogoutDrop((prev) => !prev)}
          className="leftbar-user-card-container"
        >
          <UserInfo userNeeded={user} />
          <BsThreeDots />
        </div>

        {logoutDrop && (
          <div className="leftbar-drop-up-container">
            <LogoutDropUp setLogoutDrop={setLogoutDrop} userNeeded={user} />
          </div>
        )}
      </div>
    </section>
    </Container>
  )
}

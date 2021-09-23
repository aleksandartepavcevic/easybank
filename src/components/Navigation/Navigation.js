import React, { useState, useEffect, useRef } from "react"
import Logo from "../../assets/svg/logo.svg"
import { Link } from "gatsby"
import { navAnimation } from "../../lib/animations"

const Navigation = () => {
  const [menuState, setMenuState] = useState(false)

  const tl = useRef()
  const nav = useRef()

  useEffect(() => {
    navAnimation(nav, tl)
  }, [])

  const mobileClickHandler = () => {
    setMenuState(prevState => !prevState)
  }

  return (
    <div className="_wr-f m-navigation">
      <div className="_w">
        <nav className="_12 m-navigation__content" ref={nav}>
          <Link to="/">
            <Logo className="logo" />
          </Link>
          <ul>
            <li className="link">Home</li>
            <li className="link">About</li>
            <li className="link">Contact</li>
            <li className="link">Blog</li>
            <li className="link">Careers</li>
          </ul>
          <button className="a-button -main">Request Invite</button>
          <button
            className={
              menuState ? "a-button -mobile -toggle" : "a-button -mobile"
            }
            onClick={mobileClickHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navigation

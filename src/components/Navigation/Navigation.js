import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Navigation = () => {
  const [menuState, setMenuState] = useState(false)

  const mobileClickHandler = () => {
    setMenuState(prevState => !prevState)
  }

  return (
    <div className="_wr-f m-navigation">
      <div className="_w">
        <nav className="_12 m-navigation__content">
          <Link to="/">
            <StaticImage
              src="../../assets/images/logo.svg"
              placeholder="tracedSVG"
              alt="Easybank logo"
            />
          </Link>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
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

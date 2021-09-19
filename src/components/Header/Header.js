import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <section className="m-header">
      <div className="_wr">
        <div className="_w">
          <div className="_l5 m-header__content">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="a-button -main">Request Invite</button>
          </div>

          <StaticImage
            src="../../assets/images/bg-intro-desktop.svg"
            placeholder="tracedSVG"
          />
        </div>
      </div>
    </section>
  )
}

export default Header

import React, { useEffect, useRef } from "react"
import BgSvg from "../../assets/svg/bg-pattern.svg"
import Mockup from "../../assets/svg/mockup.svg"
import MockupLeft from "../../assets/svg/mockup3.svg"
import MockupRight from "../../assets/svg/mockup2.svg"
import { headerAnimation } from "../../lib/animations"

const Header = () => {
  const el1 = useRef()
  const headerContent = useRef()
  const tl = useRef()

  useEffect(() => {
    headerAnimation(el1, headerContent, tl)
  }, [])

  return (
    <section className="m-header">
      <div className="_wr">
        <div className="_w">
          <div className="_l5 m-header__content" ref={headerContent}>
            <h1 className="test">Next generation digital banking</h1>
            <p className="test">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="a-button -main">Request Invite</button>
          </div>

          <div
            className="_l7"
            style={{ position: "relative", minHeight: 700 }}
            ref={el1}
          >
            <Mockup className="m-header__mockups" />
            <MockupLeft className="m-header__mockups -left" />
            <MockupRight className="m-header__mockups -right" />
          </div>
          <BgSvg className="m-header__bgPattern -left" />
          <BgSvg className="m-header__bgPattern -right" />
        </div>
      </div>
    </section>
  )
}

export default Header

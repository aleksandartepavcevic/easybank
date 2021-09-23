import React from "react"
import ApiSvg from "../../assets/svg/icon-api.svg"
import BudgetingSvg from "../../assets/svg/icon-budgeting.svg"
import BoardingSvg from "../../assets/svg/icon-onboarding.svg"
import OnlineSvg from "../../assets/svg/icon-online.svg"

const About = () => {
  return (
    <div className="m-about">
      <div className="_wr">
        <div className="_w">
          <div className="_ m-about__header">
            <h3>Why choose Easybank?</h3>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub.
              <br />
              Control your finances like never before.
            </p>
          </div>
        </div>
        <div className="_w">
          <div className="_l3 _s6">
            <OnlineSvg />
            <h4>Online Banking</h4>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="_l3 _s6">
            <BudgetingSvg />
            <h4>Simple Budgeting</h4>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
          <div className="_l3 _s6">
            <BoardingSvg />
            <h4>Fast Onboarding</h4>
            <p>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="_l3 _s6">
            <ApiSvg />
            <h4>Open API</h4>
            <p>Manage your savings, investments, pension, and much more </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

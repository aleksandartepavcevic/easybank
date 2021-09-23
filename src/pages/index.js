import React from "react"
import About from "../components/About/About"
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import "./../styles/scss/style.scss"

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
    </div>
  )
}

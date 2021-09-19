import React from "react"
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import "./../styles/scss/style.scss"

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
    </div>
  )
}

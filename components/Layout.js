import Header from "./Header"
import Footer from "./Footer"
import Snow from "./Snowy"
import SnowDark from "./SnowyDark"

import { useState, useEffect } from "react"
const Layout = ({ children }) => {
  const [dark, setDark] = useState(() => {
    let theme
    if (typeof window !== "undefined") {
      theme = localStorage.getItem("theme") || false
    }
    return theme === false ? theme : false
  })

  return (
    <>
      {dark ? <SnowDark style="snow" /> : <Snow style="snow" />}

      <Header dark={dark} setDark={setDark}></Header>

      <div className="layoutMain">{children}</div>
      <Footer dark={dark}></Footer>
    </>
  )
}

export default Layout

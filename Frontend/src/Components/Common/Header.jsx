import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
    {/* top bar */}
    <Topbar/>
    <div className="">
    {/* navbar */}
    <Navbar/>

    {/* cart Drawer*/}
      
    </div>
    </div>
  )
}

export default Header

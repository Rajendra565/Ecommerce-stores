import {Link,NavLink} from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className=' container mx-auto flex items-center justify-between py-4 px-10 bg-[#e4e4e4d6]'>
    {/* links left */}
    <div className="flex gap-3 items-center">
    
    <div className="center-links flex gap-3 text-center capitalize">
        <NavLink className=" hover:bg-[#f1843c] hover:text-[#fff]" style={({isActive})=>({backgroundColor:isActive?"#f1843c":"",borderRadius:"10px",padding:"10px 20px",color:isActive?"#fff":"#000"})} to="/man">man</NavLink>
        <NavLink className=" hover:bg-[#f1843c] hover:text-[#fff]" style={({isActive})=>({backgroundColor:isActive?"#f1843c":"",borderRadius:"10px",padding:"10px 20px",color:isActive?"#fff":"#000"})} to="/woman">Woman</NavLink>
        <NavLink className=" hover:bg-[#f1843c] hover:text-[#fff]" style={({isActive})=>({backgroundColor:isActive?"#f1843c":"",borderRadius:"10px",padding:"10px 20px",color:isActive?"#fff":"#000"})} to="/kids">Kids</NavLink>
        <NavLink className=" hover:bg-[#f1843c] hover:text-[#fff]" style={({isActive})=>({backgroundColor:isActive?"#f1843c":"",borderRadius:"10px",padding:"10px 20px",color:isActive?"#fff":"#000"})} to="/luxe">Luxe</NavLink>
      </div>
      

    </div>
    {/* Logo center */}
    <div className="logo">
            <Link to='/' className=''/><span className='text-2xl font-medium text-2xl font-extrabold'>Logo</span><Link/>
    </div>

    {/*  */}

    

    </nav>
      
    </div>
  )

  
}

export default Navbar

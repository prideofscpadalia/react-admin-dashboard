import React from 'react'
import "./Nav.css"
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'


export default function Nav() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            {/* we will call the components here  */}
            <NavNotice />
            <NavMessage />
            <NavAvatar />
        </ul>
    </nav>   
  )
}

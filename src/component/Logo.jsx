import React from 'react'
import './Logo.css'
export default function Logo() {
    const handleToggleSlidebar=()=>{
        document.body.classList.toggle('toggle-slidebar')
    }
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href="/" className='logo d-flex align-items-center'>
            <img src="Biyakugan.jpeg" alt="byakugan " />
            <span className='d-none d-lg-block'>Admin Dashboard</span>
        </a>
        <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSlidebar}></i>
    </div>
  )
}

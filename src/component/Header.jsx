import React from 'react'
import "./Header.css"
import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'


export default function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        <Logo />
        <SearchBar />
        <Nav />
    </header>
  )
}

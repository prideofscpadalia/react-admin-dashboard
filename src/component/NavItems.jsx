import React from 'react'

export default function NavItems({nav}) {
  return (
        <li className="nav-item" >
              <a href="#" className="nav-link collapsed">
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
              </a>
            </li>
  )
}

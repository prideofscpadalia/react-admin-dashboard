import React from 'react'
import avatarProfile from "../images/sano-manjiro-avatar.jpg"
export default function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">

        <img src={avatarProfile} alt="Profile"  className='rounded-circle' />
        <span className="d-none d-md-block dropdown-toggle ps-2">Mikey</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Sano Manjiro</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="avtar-icn bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a href="users-profile.html" className="dropdown-item d-flex align-items-center">
            <i className="avtar-icn bi bi-gear"></i>
            <span>Account Setting</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a href="pages-faq.html" className="dropdown-item d-flex align-item-center">
            <i className="avtar-icn bi bi-question-circle"></i>
            <span>Need Help ?</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a href="#" className="dropdown-item d-flex align-items-center">
            <i className="avtar-icn bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>


    </li>
  )
}

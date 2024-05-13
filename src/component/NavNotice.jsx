import React from 'react'
import './Nav.css'

export default function NavNotice() {
  return (
    <li className="nav-item dropdown">

        <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                        
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>
        {/* the class inside the ul make the menu into a dropdown */}
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                You have 4 new notifications
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                    </span>
                </a>
            </li>
            <li>
                <hr className="dowpdown-divider" />
            </li>
            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning "></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Qukfjs; sjdngjksd kshua iewihnd vmc vgwASDjfhj</p>
                    <p>30 min ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>


            <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                    <h4>Didgnsdjg </h4>
                    <p>Quefjdsk sdifj wepjf vna aj</p>
                    <p>1 hr ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>


            <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                    <h4>Didgnsdjg </h4>
                    <p>Quefjdsk sdifj wepjf vna aj</p>
                    <p>2 hrs ago</p>
                </div>
            </li>
            
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                    <h4>Didgnsdjg </h4>
                    <p>Quefjdsk sdifj wepjf vna aj</p>
                    <p>4 hrs ago</p>
                </div>
            </li>
            
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all notification</a>
            </li>
        </ul>
    </li>
  )
}

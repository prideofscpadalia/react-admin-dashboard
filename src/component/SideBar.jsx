import React from 'react'
import "./SideBar.css"
import navList from '../data/navItem'
import NavItems from './NavItems'

export default function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link collapsed" data-bs-toggle="collapse"
            data-bs-target="#components-nav">
              <i className="bi bi-menu-button-wide"></i>
              <span>Documents</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul className="nav-content collapse" id="components-nav" data-bs-parent="#sidebar-nav">
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Customer</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Supplier</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Logistic</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse"
            >
              <i className="bi bi-journal-text"></i>
              <span>Froms</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Application Form</span>
                </a>
              </li>


              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Release Form</span>
                </a>
              </li>


              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Cancilation Form</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" 
            className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Tables</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>


            <ul id="tables-nav" 
            className="nav-content collapse" 
            data-bs-parent="#sidebar-nav">
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span className='innerItem'>General Tables</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span className='innerItem'>Data Tables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#"  data-bs-target="#tables-nav" data-bs-toggle="collapse">
                      <i className="bi bi-circle"></i>
                      <span className='innerItem'>Result Tables</span>
                  </a>
                </li>                
            </ul>
          </li>


          <li className="nav-item">
            <a href="#" 
            className="nav-link collapsed" data-bs-target="#chart-nav" data-bs-toggle="collapse">
              <i class="bi bi-bar-chart"></i>
              <span>Charts</span>
              <i className="bi bi-chevron-down ms-auto"></i>

            </a>

            <ul id="chart-nav" 
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav" >
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Chart js</span>                  
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>ApexChart</span>                  
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>EChart</span>                  
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" 
            className="nav-link collapsed" data-bs-target="#chart-nav" data-bs-toggle="collapse">
              <i class="bi bi-gem"></i>
              <span>Icon</span>
              <i className="bi bi-chevron-down ms-auto"></i>

            </a>

            <ul id="chart-nav" 
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav" >
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Bootstrap</span>                  
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Remix Icon</span>                  
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span className='innerItem'>Box Icon</span>                  
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>
          {navList.map(nav => (
            <NavItems key={nav._id} nav={nav}/>
          ))}
        </ul>
    </aside>
  )
}

import React from 'react'

export default function CardFilter({filterChange}) {
  return (
    <div className="filter">
        <a href="#" className="icon" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots m-2"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
                <h6>Filter</h6>
            </li>
            <li>
                <a href="#" className="dropdown-item fw-bold" onClick={()=> filterChange('Today')}>
                    Today
                </a>
            </li>
            <li>
                <a href="#" className="dropdown-item fw-bold" onClick={()=> filterChange("This Month")}>
                    This Month
                </a>
            </li>

            <li>
                <a href="#" className="dropdown-item fw-bold" onClick={()=> filterChange("This Year")}>
                    This Year
                </a>
            </li>
        </ul>
    </div>
  )
}

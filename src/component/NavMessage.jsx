import React from 'react'

export default function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">View All</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>Maria Hudson</h4>
              <p>
               Libero eius adipisci itaque deserunt architecto!.....
              </p>
              <p>4 hrs age</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>Anna Nelson</h4>
              <p>
                Quo enim, vitae tempore, corporis perspiciatis eius autem ut deleniti voluptates ...
              </p>
              <p>6 hrs age</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>David Muldon</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit....
              </p>
              <p>8 hrs age</p>
            </div>
          </a>
        </li>

        <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all message</a>
            </li>
      </ul>
    </li>
  )
}

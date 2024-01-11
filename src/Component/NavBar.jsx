import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">NavBar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=" " aria-controls=" " aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/education">Eductaion</Link>
        </li>
     
      <li className="nav-item">
          <Link className="nav-link" to="/project">Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
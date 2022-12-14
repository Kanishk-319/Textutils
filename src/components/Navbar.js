import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
     
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dark Modes
  </button>
  <ul className="dropdown-menu  text-${props.mode==='light'?'dark':'light'}">
  <div className={`form-check form-switch`}>
         <input className="form-check-input" onClick={props.changeBlackMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Black mode</label>
      </div> 
      <div className={`form-check form-switch`}>
         <input className="form-check-input" onClick={props.changeBlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue mode</label>
      </div>
      <div className={`form-check form-switch`}>
         <input className="form-check-input" onClick={props.changeGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green mode</label>
      </div>
      <div className={`form-check form-switch`}>
         <input className="form-check-input" onClick={props.changeYellowMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Yellow mode</label>
      </div>
  </ul>
</div>


      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'Set Title Here',
    aboutText:'About text'
}
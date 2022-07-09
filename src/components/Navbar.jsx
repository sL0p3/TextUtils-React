import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode ==='light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"><img style={{height :"25px",width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/5225/5225707.png" alt="img" /></label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string,
}

Navbar.defaultProps = {
    title : "Set title here",
    about : "About",
}

export default Navbar
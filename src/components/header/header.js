import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


import MobileBio from "./MobileBio"
import desc from '../../../configDesc';

import "./header.css"



const Header = (props) => {

  return (
    <header
      className="head-main"
      style={{
        background: `black`
      }}
    >
      <div className="head-elements"
        style={{
          margin: `0`,
          padding: `.75rem`
        }}
      >
        <h1 className="head-logo ml-4" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
            
        <div className="dropdown">
          <button className="dropbtn">{desc.newPKI}</button>
          <div className="dropdown-content">
            <a href="/" onClick={(e) => props.openFrame(e, 1, 'link.newPKI')}><span className="text-light d-block py-1">Open the app</span></a>
            <a href="https://wiki.homecredit.net/confluence/display/CD/PKI+mobile+app+-+Automatic+Deployment" target="__blank">Open the wiki</a>
          </div>
        </div>


        <a href="/" onClick={(e) => props.openFrame(e, 2, 'link.mobappmonitor')}><span className="text-light d-block py-1">{desc.mobappmonitor}</span></a>
        <a href="/" onClick={(e) => props.openFrame(e, 3, 'link.restorePoint')}><span className="text-light d-block py-1">{desc.restorePoint}</span></a>
        <a href="/" onClick={(e) => props.openFrame(e, 4, 'link.monitorStatus')}><span className="text-light d-block py-1">{desc.monitorStatus}</span></a>
        <a href="/" onClick={(e) => props.openFrame(e, 5, 'link.fileFinder')}><span className="text-light d-block py-1">{desc.fileFinder}</span></a>
        <a href="/" onClick={(e) => props.openFrame(e, 5, 'link.fileFinder')}><span className="text-light d-block py-1">{desc.fileFinder}</span></a>
        <a href="/" onClick={(e) => props.openFrame(e, 5, 'link.fileFinder')}><span className="text-light d-block py-1">{desc.fileFinder}</span></a>
            
      </div>
       <MobileBio author={props.siteDescription} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.propTypes = {
  openFrame: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

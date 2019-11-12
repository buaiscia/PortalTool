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
        <a href="#" onClick={(e) => props.openFrame(e, 1, 'link.newPKI')}><span className="text-light d-block py-1">{desc.newPKI}</span></a>
            
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

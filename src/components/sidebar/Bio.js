import React from "react"
import "./sidebar.css"

import knights from "../../images/knights.jpg"

const Bio = ({ tagline, description }) => {

    return (
        <div className="bio-main w-75">
            <img src={knights} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <p/>
            <small className="text-muted">{tagline}</small>
            <br/>
            <br/>
            <small className="text-muted">{description}</small>

        
        </div>
    )
}

export default Bio
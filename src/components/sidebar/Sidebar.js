import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"
import desc from '../../../configDesc';


const link = require("../../../configLinks")


const Sidebar = (props) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteBioQuery {
                    site {
                        siteMetadata {
                            title
                            tagline
                            author
                            description                                
                        }
                    }
                    
                }
            `}
            render={data => (
                <>
                    <div className="sidebar-main border-right">
                        <Bio description={data.site.siteMetadata.description} tagline={data.site.siteMetadata.tagline} />
                        
                        <div className="tech-tags mt-4">
                            <br />
                            <a href="https://wiki.homecredit.net/confluence/display/CD/Portal+Tool" target="_blank"><button>Open the Portal Wiki</button></a>
                            <br />
                            <br />
                            <br />
                            <h6 className="text-muted">Designed by {data.site.siteMetadata.author} </h6>
                            
                        </div>
                    </div>
                </>
            )}
        />
    )
}

export default Sidebar
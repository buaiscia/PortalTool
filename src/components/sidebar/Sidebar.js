import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"

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
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <div className="sidebar-main border-right">
                        <Bio description={data.site.siteMetadata.description} tagline={data.site.siteMetadata.tagline} />
                        <div className="page-links">
                            <Link to="/"><span className="text-dark d-block py-1">Homepage</span></Link>     
                            {/* <a href={link.mobappmonitor} target="__blank"><span className="text-dark d-block py-1">mobappmonitor</span></a> */}
                            {/* <a href={link.newPKI} target="__blank"><span className="text-dark d-block py-1">newPKI</span></a> */}
                            <a href="#" onClick={(e) => props.openFrame(e, 1, 'link.newPKI')}><span className="text-dark d-block py-1">PKI Deployment</span></a>
                            <a href="#" onClick={(e) => props.openFrame(e, 2, 'link.mobappmonitor')}><span className="text-dark d-block py-1">Mobile App monitor</span></a>
                            <a href="#" onClick={(e) => props.openFrame(e, 3, 'link.monitorStatus')}><span className="text-dark d-block py-1">Monitoring alerts checks</span></a>

                        </div>
                        <div className="tech-tags mt-4">
                        <br/>
                        <br/>
                        <h6 className="text-muted">Designed by {data.site.siteMetadata.author} </h6>

                        </div>
                    </div>
                </>
            )}
        />
    )
}

export default Sidebar
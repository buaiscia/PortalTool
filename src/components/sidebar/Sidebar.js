import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"

const Sidebar = () => {
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
                            <Link to="/"><span className="text-dark d-block py-1">Blog Home</span></Link>
                            <Link to="/about"><span className="text-dark d-block py-1">About</span></Link>
                            <Link to="/archive"><span className="text-dark d-block py-1">Archive</span></Link>
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
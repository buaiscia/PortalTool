import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"
// import TechTag from "../components/tags/TechTag"
import MainPage from "../components/main/Main"

const IndexPage = ({ data }) => {
  // const posts = data.allMarkdownRemark.edges
  // const labels = data.site.siteMetadata.labels
  // const currentPage = 1
  // const nextPage = (currentPage + 1).toString()

  // const getTechTags = (tags) => {
  //   const techTags = []
  //   tags.forEach((tag, i) => {
  //     labels.forEach((label) => {
  //       if (tag === label.tag) {
  //         techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
  //       }
  //     })
  //   })
  //   return techTags
  // }


  return (
    <Layout>
      {/* <SEO title="Home" keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]} /> */}
      <div className="index-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>
        <div className="post-list-main">
             <MainPage />
          
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
         query IndexQuery {
           site {
             siteMetadata {
               title 
               author
               
             }
           }
           allMarkdownRemark(
             limit: 3
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { published: { eq: true } } }
           ) {
             totalCount
             edges {
               node {
                 excerpt(pruneLength: 200)
                 html
                 id
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
                   tags
                 }
                 fields {
                   slug
                 }
               }
             }
           }
         }
       `

export default IndexPage


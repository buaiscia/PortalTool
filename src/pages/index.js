import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"
// import TechTag from "../components/tags/TechTag"
import MainPage from "../components/main/Main"

const link = require("../../configLinks")


class IndexPage extends React.Component {


  constructor() {
        super();
        this.hideGridDiv = this.hideGridDiv.bind(this);
        this.OpenFrame = this.OpenFrame.bind(this);
        this.closeFrame = this.closeFrame.bind(this);

  }

  hideGridDiv() {   
    var elem = document.getElementById("imgGrid");
    elem.style.display = 'none';
}

OpenFrame (e,id) {
    e.preventDefault();
    var open_window;
    

    switch(id) {
        case 0: {
            var show = document.getElementById("imgGrid");
            if(show.style.display === 'none') {
                show.style.display = 'grid';

            }
            break;
        }
        case 1: {
            this.hideGridDiv();
            open_window = window.open(link.newPKI, "theFrame");
            break;
        }
        case 2: {
            this.hideGridDiv();
            open_window = window.open(link.mobappmonitor, "theFrame");
            break;
        }
    }

}

closeFrame(e) {
    e.preventDefault();
    var frame = document.getElementById("theFrame");
    // if(frame !== null) {
        frame.parentNode.replaceChild(frame, frame);
        frame.hidden = true;
        this.OpenFrame(e, 0);
    // }
    // else {
    //     this.OpenFrame(e, 0);
    // }
}

shouldComponentUpdate() {
    return false;
    }

// hideiFrame() {
//   let frame = document.getElementById("theFrame");
//     // console.log(frame);
//   frame.hidden = true;
// }
    

  render() {
    
    

    return (
      <Layout>
        {/* <SEO title="Home" keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]} /> */}
        <div className="index-main">
          <div className="sidebar px-4 py-2">
            <Sidebar />
          </div>
          
          <div className="post-list-main">
               <MainPage 
                openFrame={this.OpenFrame} 
                closeFrame={this.closeFrame}

               />
            
          </div>
        </div>
      </Layout>
    )

  }

  
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


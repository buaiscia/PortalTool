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

  hideGridDiv(frame) {   
    var elem = document.getElementById("imgGrid");
    elem.style.display = 'none';
    frame.style.display = 'flex';
    console.log('hidegrid called')
}

OpenFrame (e,id,nameApp) {
    e.preventDefault();
    let open_window;
    var show = document.getElementById("imgGrid");
    var frame = document.getElementById("bigFrameDiv");
    let tool = eval(nameApp);

    if(id === 0) {
      if(show.style.display === 'none') {
        show.style.display = 'grid';
        console.log('openframe with id 0')
      }
      console.log('openframe with id 0 out of the condition')
    }
    else {
      this.hideGridDiv(frame);
      open_window = window.open(tool, "theFrame");
      console.log('openframe with id != 0')
    }

    // switch(id) {
    //     case 0: {
    //         if(show.style.display === 'none') {
    //             show.style.display = 'grid';
    //         }
    //         break;
    //     }
        // case 1: {
        //     this.hideGridDiv(frame);
        //     open_window = window.open(link.newPKI, "theFrame");
        //     break;
        // }
        // case 2: {
        //     this.hideGridDiv(frame);
        //     open_window = window.open(link.mobappmonitor, "theFrame");
        //     break;
        // }
        // case 3: {
        //     this.hideGridDiv(frame);
        //     open_window = window.open(link.monitorStatus, "theFrame");
        //     break;
        // }
    // }

    // for(let i=1; i<=3; i++) {
      // if(i === id) {
        // this.hideGridDiv(frame);
        // open_window = window.open(tool, "theFrame");
        // break;
      // }
    // }


}

closeFrame(e) {
    e.preventDefault();
    var frame = document.getElementById("bigFrameDiv");
    // if(frame !== null) {
        frame.parentNode.replaceChild(frame, frame);
        frame.style.display = 'none';
        this.OpenFrame(e, 0, null);
        console.log('closeframe called')
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


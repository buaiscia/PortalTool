import React, {Component} from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar/Sidebar"
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

  hideSidebar(barHide) {
    var bar = document.getElementById("sideBar");
    var indexGrid = document.getElementById('index-main');
    if(barHide === true) {
      bar.style.display = 'none';
      indexGrid.style.display='block';
    }
    else {
      bar.style.display = 'block';
      indexGrid.style.display='grid'
    }
    
    console.log('hidesidebar called');
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
        this.hideSidebar(false);
        console.log('openframe with id 0')
      }
      console.log('openframe with id 0 out of the condition')
    }
    else {
      this.hideGridDiv(frame);
      this.hideSidebar(true);
      open_window = window.open(tool, "theFrame");
      console.log('openframe with id != 0')
    }


}

closeFrame(e) {
    e.preventDefault();
    var frame = document.getElementById("bigFrameDiv");
    // if(frame !== null) {
        frame.parentNode.replaceChild(frame, frame);
        frame.style.display = 'none';
        this.OpenFrame(e, 0, null);
        console.log('closeframe called')

}

shouldComponentUpdate() {
    return false;
    }


  render() {
    
    

    return (
      <Layout openFrame={this.OpenFrame}>
        {/* <SEO title="Home" keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]} /> */}
        <div id="index-main" className="index-main">
          <div id="sideBar" className="sidebar px-4 py-2">
            <Sidebar openFrame={this.OpenFrame} />
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
           
         }
       `

export default IndexPage


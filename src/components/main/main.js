import React from "react";
import Iframe from 'react-iframe';
import classes from "./Main.module.css"


//PREVIEWS
import PKI from '../../images/PKI.png';
import mob_mon from '../../images/mob_mon.png';
import mon_stat from '../../images/monitor_status.png'




const MainPage = (props) => {

   

    return(
        <div id="main">
            <div id="top">
                        {/* <a href="http://127.0.0.1:8000"><h1>Portal Tool Homepage</h1></a> */}
                        <p><a href="#" onClick={(e) => props.closeFrame(e)}>Close the tab</a></p>
                        {/* <p><a href="http://127.0.0.1:8000">Close the tab</a></p> */}
            </div>

            <div id="imgGrid" className={classes.imgGrid}>

                            <a href="#" onClick={(e) => props.openFrame(e, 1)}><img src={PKI} alt="PKI Deployment"></img></a> 
                        
                            <a href="#" onClick={(e) => props.openFrame(e, 2)}><img src={mob_mon} alt="Mobile Monitoring"></img></a>
                            
                            <a href="#" onClick={(e) => props.openFrame(e, 3)}><img src={mon_stat} alt="Mobile Monitoring"></img></a>

            </div>

                                   
            <div id="bigFrameDiv" className="bigFrameDiv">
                        <Iframe 
                            width="1500px"
                            height="900px"
                            id="theFrame"
                            name="theFrame"
                            // display="initial"
                            position="relative"
                            frameBorder="5px"
                            target="_self"/>

            </div>
        </div>

    )
}

export default MainPage;
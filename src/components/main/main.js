import React from "react";
import Iframe from 'react-iframe';
import classes from "./Main.module.css"
import StyledFrame from 'react-styled-frame'
import styled, { ThemeProvider } from 'styled-components'


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

                            <a href="#" onClick={(e) => props.openFrame(e, 1, 'link.newPKI')}><img src={PKI} alt="PKI Deployment"></img></a> 
                        
                            <a href="#" onClick={(e) => props.openFrame(e, 2, 'link.mobappmonitor')}><img src={mob_mon} alt="Mobile Monitoring"></img></a>
                            
                            <a href="#" onClick={(e) => props.openFrame(e, 3, 'link.monitorStatus')}><img src={mon_stat} alt="Mobile Monitoring"></img></a>

            </div>

                                   
            <div id="bigFrameDiv" className={classes.bigFrameDiv}>
                <ThemeProvider theme={{ mode: 'dark' }}> 
                        <StyledFrame 
                            style={{
                                width: '100%',
                                // height: '100%',
                                // position: 'relative',
                                border: '5'
                            }}
                            // width="1500px"
                            // height="900px"
                            
                            id="theFrame"
                            name="theFrame"
                            target="_self"/>
                </ThemeProvider>
            </div>
        </div>

    )
}

export default MainPage;
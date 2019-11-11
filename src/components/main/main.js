import React from "react";
import Iframe from 'react-iframe';
import classes from "./Main.module.css"
import StyledFrame from 'react-styled-frame'
import styled, { ThemeProvider } from 'styled-components'

import desc from '../../../configDesc';


//PREVIEW IMAGES
import PKI from '../../images/PKI.png';
import mob_mon from '../../images/mob_mon.png';
import mon_stat from '../../images/monitor_status.png';
import restorePoint from '../../images/RP.png';
import fileFinder from '../../images/fileFinder.png';




const MainPage = (props) => {

   

    return(
        <div id="main">
            <div id="top">
                        {/* <a href="http://127.0.0.1:8000"><h1>Portal Tool Homepage</h1></a> */}
                        <p><a href="#" onClick={(e) => props.closeFrame(e)}>Close the tab</a></p>
                        {/* <p><a href="http://127.0.0.1:8000">Close the tab</a></p> */}
            </div>

            <div id="imgGrid" className={classes.imgGrid}>

                        <div className={classes.img__wrap}>
                            <a href="#" onClick={(e) => props.openFrame(e, 1, 'link.newPKI')}><img src={PKI} alt={desc.newPKI}></img>
                                <div className={classes.img__description_layer}>
                                    <p className={classes.img__description}>{desc.newPKI}</p>
                                </div>
                            </a> 
                        </div>

                        <div className={classes.img__wrap}>
                            <a href="#" onClick={(e) => props.openFrame(e, 2, 'link.mobappmonitor')}><img src={mob_mon} alt={desc.mobappmonitor}></img>
                                <div className={classes.img__description_layer}>
                                    <p className={classes.img__description}>{desc.mobappmonitor}</p>
                                </div>
                            </a> 
                        </div>

                        <div className={classes.img__wrap}>
                            <a href="#" onClick={(e) => props.openFrame(e, 3, 'link.monitorStatus')}><img src={mon_stat} alt={desc.monitorStatus}></img>
                                <div className={classes.img__description_layer}>
                                    <p className={classes.img__description}>{desc.monitorStatus}</p>
                                </div>
                            </a> 
                        </div>

                        <div className={classes.img__wrap}>
                            <a href="#" onClick={(e) => props.openFrame(e, 4, 'link.restorePoint')}><img src={restorePoint} alt={desc.restorePoint}></img>
                                <div className={classes.img__description_layer}>
                                    <p className={classes.img__description}>{desc.restorePoint}</p>
                                </div>
                            </a> 
                        </div>

                        <div className={classes.img__wrap}>
                            <a href="#" onClick={(e) => props.openFrame(e, 5, 'link.fileFinder')}><img src={fileFinder} alt={desc.fileFinder}></img>
                                <div className={classes.img__description_layer}>
                                    <p className={classes.img__description}>{desc.fileFinder}</p>
                                </div>
                            </a> 
                        </div>


                            {/* <a href="#" onClick={(e) => props.openFrame(e, 2, 'link.mobappmonitor')}><img src={mob_mon} alt="Mobile Monitoring"></img></a> */}
                            
                            {/* <a href="#" onClick={(e) => props.openFrame(e, 3, 'link.monitorStatus')}><img src={mon_stat} alt="Mobile Monitoring"></img></a> */}

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
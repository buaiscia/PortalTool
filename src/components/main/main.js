import React, { Component } from "react";
// import Iframe from 'react-iframe';
import classes from "./Main.module.css"
import StyledFrame from 'react-styled-frame'
import { ThemeProvider } from 'styled-components'

import desc from '../../../configDesc';


//PREVIEW IMAGES
import PKI from '../../images/PKI_2.png';
import mob_mon from '../../images/mob_mon_2.png';
import mon_stat from '../../images/monitor_status_2.png';
import restorePoint from '../../images/RP_2.png';
import fileFinder from '../../images/fileFinder_2.png';




class MainPage extends React.Component {

    constructor(props) {
        super(props);
        props = this.props;
        this.gridSection = React.createRef();

    }


    render() {

        var textCenter = { 'textAlign': 'center' }

        let props = this.props;

        // let gridProp = this.gridProp


        return (
            <div id="main">
              
                {/* <div className={classes.topDiv} id="topDiv">


                    <p style={textCenter}>

                        <a href="/" onClick={(e) => props.closeFrame(e)}><button className={classes.closeButton}>Close it</button></a>
                    </p>
                </div> */}

                <div id="imgGrid" ref={this.gridSection} className={classes.imgGrid}>

                    <div className={classes.img__wrap}>
                        <a href="/" onClick={(e) => props.openFrame(e, 1, 'link.newPKI')}><img src={PKI} alt={desc.newPKI}></img>
                            <div className={classes.img__description_layer}>
                                <p className={classes.img__description}>{desc.newPKI}</p>
                            </div>
                        </a>
                    </div>

                    <div className={classes.img__wrap}>
                        <a href="/" onClick={(e) => props.openFrame(e, 1, 'link.mobappmonitor')}><img src={mob_mon} alt={desc.mobappmonitor}></img>
                            <div className={classes.img__description_layer}>
                                <p className={classes.img__description}>{desc.mobappmonitor}</p>
                            </div>
                        </a>
                    </div>

                    <div className={classes.img__wrap}>
                        <a href="/" onClick={(e) => props.openFrame(e, 1, 'link.monitorStatus')}><img src={mon_stat} alt={desc.monitorStatus}></img>
                            <div className={classes.img__description_layer}>
                                <p className={classes.img__description}>{desc.monitorStatus}</p>
                            </div>
                        </a>
                    </div>

                    <div className={classes.img__wrap}>
                        <a href="/" onClick={(e) => props.openFrame(e, 1, 'link.restorePoint')}><img src={restorePoint} alt={desc.restorePoint}></img>
                            <div className={classes.img__description_layer}>
                                <p className={classes.img__description}>{desc.restorePoint}</p>
                            </div>
                        </a>
                    </div>

                    <div className={classes.img__wrap}>
                        <a href="/" onClick={(e) => props.openFrame(e, 1, 'link.fileFinder')}><img src={fileFinder} alt={desc.fileFinder}></img>
                            <div className={classes.img__description_layer}>
                                <p className={classes.img__description}>{desc.fileFinder}</p>
                            </div>
                        </a>
                    </div>


                </div>


                <div id="bigFrameDiv" className={classes.bigFrameDiv + ' ' + classes.hidden}>
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
                            target="_self" />
                    </ThemeProvider>
                </div>
            </div>

        )

    }



}

export default MainPage;
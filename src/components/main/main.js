import React, { Component } from "react";
// import Iframe from 'react-iframe';
import classes from "./Main.module.css"
import StyledFrame from 'react-styled-frame'
import { ThemeProvider } from 'styled-components'

import desc from '../../../configDesc';


//PREVIEW IMAGES
import PKI from '../../images/PKI.png';
import mob_mon from '../../images/mob_mon.png';
import mon_stat from '../../images/monitor_status.png';
import restorePoint from '../../images/RP.png';
import fileFinder from '../../images/fileFinder.png';




class MainPage extends React.Component {

    constructor(props) {
        super(props);
        props = this.props;
        this.gridSection = React.createRef();
        // this.hideButton = this.hideButton.bind(this);

    }



    // hideButton() {

    //     let gridProp = window.getComputedStyle(this.gridSection.current, null).getPropertyValue("display");
    //     console.log(gridProp);

    //     var textCenter = { 'textAlign': 'center' }
    //     let props = this.props;

    //     if (gridProp === "grid") {
    //         console.log("returned grid");
    //     }

    //     console.log(this.state.isGrid)
    // }

    // return (
    //     <div id="top">
    //     {/* <a href="http://127.0.0.1:8000"><h1>Portal Tool Homepage</h1></a> */}
    //     <p style={textCenter}>
    //         <a href="/" onClick={(e) => props.closeFrame(e)}><button className={classes.closeButton}>Close it</button></a>
    //     </p>
    //     {/* <p><a href="http://127.0.0.1:8000">Close the tab</a></p> */}
    //     </div>
    // )







    render() {

        var textCenter = { 'textAlign': 'center' }

        let props = this.props;
        // var isHidden = document.getElementById('index-main');
        // var isHidden2 = window.getComputedStyle(isHidden, null).getPropertyValue("display");
        // console.log(isHidden);
        let gridProp = this.gridProp


        return (
            <div id="main">
              
                <div class={classes.topDiv} id="topDiv">


                    <p style={textCenter}>

                        <a href="/" onClick={(e) => props.closeFrame(e)}><button className={classes.closeButton}>Close it</button></a>
                    </p>
                </div>

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
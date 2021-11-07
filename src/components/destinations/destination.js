import { destinations } from '../../data';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../home/home.css'
import Stack from '@mui/material/Stack';

class Destinations extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedDestination: null,
            splitLocation: ""
        }
    }
    getSelectedDestination = (selectedItem) => {
        let selectedDestination = destinations.filter(destination => destination.name === selectedItem);
        this.setState({ selectedDestination: selectedDestination[0], splitLocation: selectedItem })
        console.log("cccccccccccccccccc", selectedDestination[0], this.state.selectedDestination.images)
    }
    componentDidMount() {

        let selectedDestination = destinations.filter(destination => destination.name === "Moon");
        this.setState({ selectedDestination: selectedDestination[0] })

    }
    render() {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15%', width: '100%', overflow: 'hidden' }}>
                <span style={{ fontFamily: 'Barlow Condensed', letterSpacing: '4.72px', fontSize: '28px', color: 'white' }}>01 PICK YOUR DESTINATION</span>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                    <div style={{ width: '20%', padding: '5%' }}>
                        {this.state.splitLocation !== "" ? <img src={require(`../../assets/destination/image-${this.state.splitLocation.toLowerCase()}.png`).default} /> :
                            <img src={require("../../assets/destination/image-moon.png").default} />}

                    </div>
                    <div style={{
                        width: '80%', display: 'flex', paddingLeft: '10%', paddingTop: '6%',
                        flexDirection: 'column', color: 'white', alignItems: 'flex-start'

                    }}>
                        <ul className="topnav" >

                            <li className={this.state.splitLocation === "Moon" ? "active" : ""} onClick={() => this.getSelectedDestination("Moon")}><a href="#">MOON</a></li>
                            <li className={this.state.splitLocation === "Mars" ? "active" : ""} onClick={() => this.getSelectedDestination("Mars")}><a href="#">MARS</a></li>
                            <li className={this.state.splitLocation === "Europa" ? "active" : ""} onClick={() => this.getSelectedDestination("Europa")}><a href="#">EUROPA</a></li>
                            <li className={this.state.splitLocation === "Titan" ? "active" : ""} onClick={() => this.getSelectedDestination("Titan")}><a href="#">TITAN</a></li>

                        </ul>
                        {this.state.selectedDestination !== null ?
                            <>
                                <span style={{ fontFamily: 'Bellefair', paddingTop: '3%', fontSize: '100px' }}>{this.state.selectedDestination.name !== undefined ? this.state.selectedDestination.name.toUpperCase() : ""}</span>
                                <span style={{
                                    fontFamily: 'Barlow', textAlign: 'justify', width: '50%',
                                    paddingBottom: '5%', borderBottom: '1px solid grey', lineHeight: '22px', color: '#D0D6F9'
                                }}>{this.state.selectedDestination.description}</span>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '40%', textAlign: 'left', marginTop: '20px' }}>
                                    <Stack spacing={2}>
                                        <span style={{ fontFamily: 'Barlow Condensed', letterSpacing: '2.36px', fontSize: '14px', color: '#D0D6F9' }}>AVG DISTANCE</span>
                                        <span style={{ fontFamily: 'Bellefair', fontSize: '28px' }}>{this.state.selectedDestination.distance !== undefined ? this.state.selectedDestination.distance.toUpperCase() : ''}</span>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <span style={{ fontFamily: 'Barlow Condensed', letterSpacing: '2.36px', fontSize: '14px', color: '#D0D6F9' }}>EST TRAVEL TIME</span>
                                        <span style={{ fontFamily: 'Bellefair', fontSize: '28px' }}>{this.state.selectedDestination.travel !== undefined ?
                                            this.state.selectedDestination.travel.toUpperCase() : ""}</span>
                                    </Stack>
                                </div>
                            </> : <></>}
                    </div>

                </div>

            </div>



        )
    }
}

export default Destinations;
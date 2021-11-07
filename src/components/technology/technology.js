import React from 'react';
import { technology } from '../../data';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import './technology.css';

class Technology extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTech: null,
            selectedItemName: "Launch vehicle",
            src: "image-launch-vehicle-portrait.jpg"
        }
    }

    componentDidMount() {
        let selectedTech = technology.filter(tech => tech.name === "Launch vehicle");
        this.setState({ selectedTech: selectedTech[0], selectedItemName: "Launch vehicle", src: "image-launch-vehicle-portrait.jpg" })

    }
    getSelectedTechnology = (selectedItem) => {
        let selectedTech = technology.filter(tech => tech.name === selectedItem);
        let src = selectedTech[0].images.portrait;

        this.setState({ selectedTech: selectedTech[0], selectedItemName: selectedTech[0].name, src: src.substring(src.lastIndexOf('/') + 1, src.length) })

    }
    render() {
        return (


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15%' }}>
                <span style={{ fontFamily: 'Barlow Condensed', letterSpacing: '4.72px', fontSize: '28px', color: 'white' }}>03 SPACE LAUNCH 101</span>


                <div style={{
                    display: 'flex', flexDirection: 'row', width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between'

                }} >
                    <Stack spacing={3} style={{ width: '10%' }}>
                        <Fab aria-label="add" onClick={() => this.getSelectedTechnology("Launch vehicle")}
                            className={this.state.selectedItemName !== "Launch vehicle" ? "passive" : "active"}>
                            <p>1</p>
                        </Fab>
                        <Fab aria-label="add" className={this.state.selectedItemName !== "Spaceport" ? "passive" : ""}
                            onClick={() => this.getSelectedTechnology("Spaceport")}>
                            <p>2</p>
                        </Fab>
                        <Fab aria-label="add" className={this.state.selectedItemName !== "Space capsule" ? "passive" : ""}
                            onClick={() => this.getSelectedTechnology("Space capsule")}>
                            <p>3</p>
                        </Fab>
                    </Stack>
                    {this.state.selectedTech !== null ? <>

                        <Stack spacing={2} style={{ color: 'white', textAlign: 'left', width: '35%' }}>

                            <span style={{ fontFamily: 'Barlow Condensed', fontSize: '16px', letterSpacing: '2.7px' }}>The Technology...</span>
                            <span style={{ fontFamily: 'Bellefair', fontSize: '52px' }}>{this.state.selectedTech.name !== undefined ? this.state.selectedTech.name.toUpperCase() : ""}</span>
                            <span style={{ fontFamily: 'Barlow', fontSize: '18px', lineHeight: '32px' }}>
                                {this.state.selectedTech.description}
                            </span>
                        </Stack>
                        <div style={{ width: '55%' }}>
                            <img src={require(`../../assets/technology/${this.state.src}`).default} />
                        </div>
                    </> : <></>}
                </div>
            </div>
        )
    }
}

export default Technology;
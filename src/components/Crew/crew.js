import React from 'react';
import CrewSlider from './crew-carosel';


class Crew extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15%', }}>
                <span style={{ fontFamily: 'Barlow Condensed', letterSpacing: '4.72px', fontSize: '28px', color: 'white' }}>02 MEET YOUR CREW</span>


                <div style={{
                    display: 'flex', flexDirection: 'row', width: '100%',
                    alignItems: 'center'
                }} >
                    <CrewSlider />


                </div>
            </div>
        )
    }
}

export default Crew;
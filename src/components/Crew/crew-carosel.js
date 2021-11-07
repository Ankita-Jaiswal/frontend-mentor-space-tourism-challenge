import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { crew } from '../../data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stack from '@mui/material/Stack';

const CrewSlider = () => {
    const [src, setSrc] = React.useState('image-anousheh-ansari.png')
    const getImageForSlider = (index) => {
        let src = crew[index - 1].images.png;
        setSrc(src.substring(src.lastIndexOf('/') + 1, src.length));
    }
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
                <Carousel showArrows={false} showStatus={false} autoPlay showThumbs={false} onChange={(index) => getImageForSlider(index)}>
                    {crew.map((member, index) => <Stack spacing={2} key={index} style={{ textAlign: 'left', color: 'white', paddingBottom: '10%', paddingTop: '10%' }}>
                        <span style={{ fontFamily: 'Bellefair', fontSize: '32px', color: '#D0D6F9', }}>{member.role.toUpperCase()}</span>
                        <span style={{ fontFamily: 'Bellefair', fontSize: '56px' }}>{member.name.toUpperCase()}</span>
                        <span style={{ fontFamily: 'Barlow Condensed', fontSize: '17px', color: '#D0D6F9', lineHeight: '32px' }} >{member.bio}</span>
                    </Stack>)}
                </Carousel>
            </div>
            <div style={{ textAlign: 'left', width: '50%' }}>
                <img src={require(`../../assets/crew/${src}`).default} />
            </div>
        </div>

    )
}

export default CrewSlider;

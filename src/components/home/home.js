import React from 'react';
import './home.css';

class Home extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (

            <div style={{
                display: 'flex', flexDirection: 'row', width: '100%',
                padding: '10%', alignItems: 'center'
            }} >
                <div style={{
                    width: '30%', display: 'flex',
                    flexDirection: 'column', color: 'white', alignItems: 'flex-start'
                    , paddingLeft: '7%'
                }}>
                    <span className="line-1" style={{ fontFamily: 'Barlow Condensed', letterSpacing: '4.72px' }}>SO, YOU WANT TO TRAVEL TO </span>
                    <span className="line-2" style={{ fontFamily: 'Bellefair' }}>SPACE</span>
                    <span className="line-3" style={{ fontFamily: 'Barlow' }}>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
                        the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore

                        </span>
                </div>
                <div style={{ width: '70%', textAlign: '-webkit-center' }}>
                    <div className="circle" >
                        <h3 style={{ paddingTop: '45%', fontFamily: 'Bellefair', letterSpacing: '2px' }} >EXPLORE</h3>
                    </div>
                </div>


            </div>

        )
    }
}

export default Home;
import './App.css';
import Home from './components/home/home';
import HomeImg from './assets/home/background-home-desktop.jpg';
import DestinationImg from './assets/destination/background-destination-desktop.jpg'
import CrewImg from './assets/crew/background-crew-desktop.jpg';
import TechnologyImg from './assets/technology/background-technology-desktop.jpg'
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";
import Header from './components/home/header';
import { withRouter } from 'react-router-dom'
import Crew from './components/Crew/crew';
import Destinations from './components/destinations/destination';
import Technology from './components/technology/technology';

function App({ history }) {

  const [backgroundImg, setBackgroundImg] = React.useState(HomeImg)
  useEffect(() => {
    console.log('> nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnRouter', history.location.pathname)
    let img = HomeImg;
    switch (history.location.pathname) {
      case '/destination':
        img = DestinationImg;
        break;
      case '/crew':
        img = CrewImg;
        break;
      case '/technology':
        img = TechnologyImg;
        break;
      default:
        img = HomeImg;
        break;
    }
    setBackgroundImg(img);
  }, [history.location.pathname]);
  return (

    <div className="App" style={{ backgroundImage: `url(${backgroundImg})`, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <Header />
      <Switch>
        <Route path="/destination">
          <Destinations />
        </Route>
        <Route path="/crew" >
          <Crew />
        </Route>
        <Route path="/technology" >
          <Technology />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  );
}

export default withRouter(App);

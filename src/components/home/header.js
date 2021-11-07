import React from 'react';
import './home.css';
import SpaceIcon from "../../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', padding: '5%', alignItems: 'center' }}>
            <div style={{ width: '10%' }}>
                <img src={SpaceIcon} />
            </div>
            <div style={{ width: '30%', borderBottom: '1px solid white' }}>
                {/* <span style={{  /> */}
            </div>
            <ul className="topnav" style={{ width: '60%' }}>
                <li className="first"><a href="#news"></a></li>
                <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/" >00 HOME</Link></li>
                <li className={splitLocation[1] === "destination" ? "active" : ""}><Link to="/destination">01 DESTINATION</Link></li>
                <li className={splitLocation[1] === "crew" ? "active" : ""}><Link to="/crew">02 CREW</Link></li>
                <li className={splitLocation[1] === "technology" ? "active" : ""}><Link to="/technology">03 TECHNOLOGY</Link></li>
                <li className="last"></li>
            </ul>
        </div>
    );
}
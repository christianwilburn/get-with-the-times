import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Footer className='site-footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/directory">About</Link></li>
                            <li><Link to="/aboutus">Contact</Link></li>
                            <li><Link to="/contactus">Help</Link></li>
                        </ul>
                </div>
            </div>
        </div>
        </Footer>
    );
}

export default Footer;
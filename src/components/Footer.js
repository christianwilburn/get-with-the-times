import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/help">Help</Link></li>
                        </ul>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
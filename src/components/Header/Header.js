
import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className = "jumbotron jumbotron-fluid myHeader">  
                <div className = "container" >
                    <h1 className="display-4">Clicky Game</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        );
    }
}

export default Header;
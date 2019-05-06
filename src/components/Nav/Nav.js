import React from 'react';


const Nav = (props) => {


        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Clicky Game</a>
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <span className="navbar-text">
                            Score: {props.score}
                    </span>
                </nav>
            </div>
        )
    }


export default Nav;
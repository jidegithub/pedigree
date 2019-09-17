import React from 'react';
import {NavLink} from 'react-router-dom';

export default function AppContainer() {
    return (
        <div className="tabbedNav">
            <nav className="navbar navbar-default navbar-static-top">
                <ul className="nav justify-content-start">
                    <li className="nav-item">
                        <NavLink to="/cardlist" exact activeClassName="active" className="nav-link">Breed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/list" activeClassName="active" className="nav-link">Sell</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

import React from "react";
import {Link} from "react-router-dom";

import './Navigation.styles.css';

export default class NavigationComponent extends React.Component {
    render() {
        return (
            <nav className='Navigation'>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/paragraphs'>
                        <li>Paragraphs</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}
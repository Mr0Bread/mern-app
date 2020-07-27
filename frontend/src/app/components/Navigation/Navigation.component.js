import React from "react";
import {Link} from "react-router-dom";

import './Navigation.styles.css';

export default class NavigationComponent extends React.Component {
    _renderLinks() {
        const { navData } = this.props;
        let links = [];
        navData.forEach(element => links.push(
            <Link to={element[0]}>
                <li>{[element[1]]}</li>
            </Link>
        ));
        console.log(links)
        return links
    }

    render() {
        const links = this._renderLinks();
        return (
            <nav className='Navigation'>
                <ul>
                    {links}
                </ul>
            </nav>
        );
    }
}
import React from "react";
import './Header.styles.css';
import NavigationComponent from "../Navigation/Navigation.component";

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <header className='Header'>
                <h2>Header</h2>
                <NavigationComponent/>
            </header>
        );
    }
}
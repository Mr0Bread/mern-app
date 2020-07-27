import React from "react";
import './Header.styles.css';
import NavigationComponent from "../Navigation/Navigation.component";

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.navData = [
            ['/', 'Home'],
            ['/paragraphs', 'Add Paragraph'],
            ['/addUser', 'Add User'],
            ['/meteo', 'Meteo Page']
        ]
    }

    render() {
        return (
            <header className='Header'>
                <h2>Header</h2>
                <NavigationComponent navData={this.navData}/>
            </header>
        );
    }
}
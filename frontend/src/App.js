import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './app/styles/main.css';

import HomePageComponent from "./app/components/HomePage/HomePage.component";
import HeaderComponent from "./app/components/Header/Header.component";
import FooterComponent from "./app/components/Footer/Footer.component";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <HeaderComponent/>
                <Route path='/' exact component={HomePageComponent}/>
                <FooterComponent/>
            </Router>
        );
    }
};

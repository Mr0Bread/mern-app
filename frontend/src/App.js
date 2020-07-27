import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './app/styles/main.css';

import HeaderComponent from "./app/components/Header/Header.component";
import FooterComponent from "./app/components/Footer/Footer.component";

const HomePageComponent = lazy(() => import("./app/components/HomePage/HomePage.component"));
const ParagraphController = lazy(() => import('./app/components/ParagraphController/ParagraphController.component'));
const MeteoPage = lazy(() => import('./app/components/MeteoPage/MeteoPage.component'));

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <HeaderComponent/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' exact component={HomePageComponent}/>
                        <Route path='/paragraphs' component={ParagraphController}/>
                        <Route path='/meteo' component={MeteoPage}/>
                    </Switch>
                </Suspense>
                <FooterComponent/>
            </Router>
        );
    }
};

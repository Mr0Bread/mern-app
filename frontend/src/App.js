import React from 'react';
import './app/style/index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./app/components/HomePage/HomePage";
import TablesPage from "./app/components/TablesPage/TablesPage";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={HomePage}/>
                <Route path='/tables' component={TablesPage}/>
            </Router>
        );
    }
};

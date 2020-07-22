import React from 'react';
import UserWidgetComponent from "./app/components/UserWidget/UserWidget.component";
import Header from "./app/components/Header/Header";
import './app/style/index.css';
import MainBody from "./app/components/MainBody/MainBody";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainBody class='App-Container'>
                    <UserWidgetComponent/>
                </MainBody>
            </div>
        );
    }
};

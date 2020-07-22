import React from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import UserWidgetComponent from "../UserWidget/UserWidget.component";
import TaskWidget from "../TaskWidget/TaskWidget";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainBody class='App-Container'>
                    <div className='App-Flex'>
                        <UserWidgetComponent/>
                        <TaskWidget/>
                    </div>
                </MainBody>
            </div>
        );
    }
};
import React from "react";
import MainBody from "../MainBody/MainBody";
import UserWidgetComponent from "../UserWidget/UserWidget.component";
import TaskWidgetComponent from "../TaskWidget/TaskWidget.component";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainBody class='App-Container'>
                    <div className='App-Flex'>
                        <UserWidgetComponent/>
                        <TaskWidgetComponent/>
                    </div>
                </MainBody>
            </div>
        );
    }
};
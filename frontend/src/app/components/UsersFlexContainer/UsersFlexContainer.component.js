import React from "react";

import "./UsersFlexContainer.styles.css";

export default class UsersFlexContainerComponent extends React.Component {
    render() {
        return (
            <div className='Users-Flex-Container'>
                {this.props.children}
            </div>
        );
    }
}
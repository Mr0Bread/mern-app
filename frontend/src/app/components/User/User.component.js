import React from "react";

import './User.styles.css';

export default class UserComponent extends React.Component {
    constructor(props) {
        super(props);

        this.username = this.props.username;
        this.password = this.props.password;
    }

    render() {
        return (
            <span className='User'>
                <span>Username: {this.username}</span>
                <span>Password: {this.password}</span>
            </span>
        );
    }
}
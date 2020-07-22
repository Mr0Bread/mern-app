import React from "react";

export default class DeleteUserButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.userId = this.props.id;
        this.handleDelete = this.props.onDelete;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.userId
            })
        };

        fetch('http://localhost:5000/user/delete', requestOptions)
            .then(res => res.json())
        this.handleDelete();
    }

    render() {
        return(
            <button type='button' onClick={this.handleClick}>Delete User</button>
        );
    }
};
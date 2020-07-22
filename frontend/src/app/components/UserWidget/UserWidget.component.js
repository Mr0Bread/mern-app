import React from "react";
import AddUserFormComponent from "./AddUserForm/AddUserForm.component";
import DeleteUserButtonComponent from "./DeleteUserButton/DeleteUserButton.component";
import EditUserFormComponent from "./EditUserForm/EditUserForm.component";

import './UserWidget.css';

export default class UserWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: false,
            isUpdated: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: true
        })
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(
                (result) => this.setState({
                    users: result
                }));
    }

    handleSubmit() {
        this.setState({
            isUpdated: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isUpdated !== this.state.isUpdated) {
            window.location.reload();
            this.setState({
                isUpdate: true
            })
        }
    }

    render() {
        if (!this.state.users) {
            return <span>Loading Users...</span>
        } else if (this.state.users === true) {
            return <span>No users found<AddUserFormComponent onSubmit={this.handleSubmit}/></span>
        } else {
            let userElements = [];

            this.state.users.map(user => userElements.push(
                <li key={user._id}>
                    <span>Username: {user.username}</span>
                    <span>Password: {user.password}</span>
                    <DeleteUserButtonComponent id={user._id} onDelete={this.handleSubmit}/>
                    <EditUserFormComponent user={user} onSubmit={this.handleSubmit}/>
                </li>))

            return (
                <span>
                    <h2>User List:</h2>
                    <ol className='List-User'>
                        {userElements}
                    </ol>
                    <h2>Add New User</h2>
                    <AddUserFormComponent onSubmit={this.handleSubmit}/>
                </span>
            );
        }
    }
}
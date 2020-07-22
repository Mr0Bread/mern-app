import React from "react";

export default class AddUserFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormRefresh = this.props.onSubmit;

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {username, password} = this.state;

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            })
        };

        fetch('http://localhost:5000/user/add', requestOptions)
            .then(res => res.json());
        this.handleFormRefresh();
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='Form-Edit-Shown'>
                <label>
                    Username:
                    <input required={true} minLength='6' type='text' name='username' value={this.state.username}
                           onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input required={true} minLength='8' type='text' name='password' value={this.state.password}
                           onChange={this.handleChange}/>
                </label>
                <input type='submit'/>
            </form>
        );
    }
}
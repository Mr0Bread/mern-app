import React from "react";

export default class EditUserFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.state = {
            formClass: 'Form-Edit-Hidden',
            username: this.user.username,
            password: this.user.password,
            id: this.user._id
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormRefresh = this.props.onSubmit;
    }

    handleClick() {
        if (this.state.formClass === 'Form-Edit-Hidden') {
            this.setState({
                formClass: 'Form-Edit-Shown'
            })
        } else {
            this.setState({
                formClass: 'Form-Edit-Hidden'
            })
        }
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const {username, password, id} = this.state;

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id,
                username,
                password
            })
        };

        fetch('http://localhost:5000/user/edit', requestOptions)
            .then(res => res.json());
        this.handleFormRefresh();
    }

    render() {
        return (
            <span>
                <button type='button' onClick={this.handleClick}>Edit</button>
                <form className={this.state.formClass} onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>
                            <span>Username: </span>
                            <input type='text' name='username' value={this.state.username}
                                   onChange={this.handleChange}/>
                        </label>
                        <label>
                            <span>Password: </span>
                            <input type='text' name='password' value={this.state.password}
                                   onChange={this.handleChange}/>
                        </label>
                        <input type='submit'/>
                    </fieldset>
                </form>
            </span>
        )
    }
}
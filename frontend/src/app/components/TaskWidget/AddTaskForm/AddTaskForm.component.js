import React from "react";

export default class AddTaskFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            assignee: ''
        }

        this.handleFormRefresh = this.props.handleSubmit;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {todo, assignee} = this.state;

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                todo,
                assignee
            })
        };

        fetch('http://localhost:5000/task/add', requestOptions)
            .then(res => res.json());
        this.handleFormRefresh();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='Form-Edit-Shown'>
                <label>
                    TODO:
                    <input type='text' name='todo' onChange={this.handleChange} value={this.state.todo}/>
                </label>
                <label>
                    Assignee:
                    <input type='text' name='assignee' onChange={this.handleChange} value={this.state.assignee}/>
                </label>
                <input type="submit"/>
            </form>
        );
    }
};
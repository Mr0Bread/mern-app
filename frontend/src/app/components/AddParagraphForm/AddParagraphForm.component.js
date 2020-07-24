import React from "react";

import './AddParagraphForm.styles.css';

export default class AddParagraphFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const { title, text } = this.state;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, text })
        };
        fetch('http://localhost:5000/paragraph/add', requestOptions)
            .then(response => response.json())
            .then(() => window.location = '/');
    }

    render() {
        return (
            <form className='Paragraph-Form' onSubmit={this.handleSubmit}>
                <fieldset className='Paragraph-Form-Fieldset'>
                    <label htmlFor="title">
                        <span>Title:</span>
                        <input type="text" name='title' onChange={this.handleChange}/>
                    </label>

                    <h3>Text: </h3>
                    <textarea name="text" id="text" cols="30" rows="10" onChange={this.handleChange}/>
                    <input type="submit"/>
                </fieldset>
            </form>
        );
    }
}
import React from "react";

import './Paragraph.styles.css';

export default class ParagraphComponent extends React.Component {
    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: this.title })
        };

        fetch('http://localhost:5000/paragraph/get', requestOptions)
            .then(res => res.json())
            .then((result) => this.setState({
                text: result.text
            }));
    }

    render() {
        const {text} = this.state;

        return (
            <p className='Paragraph'>
                {text}
            </p>
        );
    }
}
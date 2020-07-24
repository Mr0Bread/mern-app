import React from "react";

import './Paragraph.styles.css';

export default class ParagraphComponent extends React.Component {
    constructor(props) {
        super(props);

        this.text = this.props.text;
        this.title = this.props.title;
    }

    render() {
        return (
            <span className='Paragraph'>
                <h3>{this.title}</h3>
                {this.text}
            </span>
        );
    }
}
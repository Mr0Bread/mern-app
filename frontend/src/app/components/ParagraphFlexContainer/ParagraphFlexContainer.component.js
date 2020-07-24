import React from "react";

import './ParagraphFlexContainer.styles.css';

export default class ParagraphFlexContainerComponent extends React.Component {
    render() {
        return (
            <div className='Paragraph-Flex-Container'>
                {this.props.children}
            </div>
        );
    }
}
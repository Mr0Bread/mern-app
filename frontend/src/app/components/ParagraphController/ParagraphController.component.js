import React from "react";

import './ParagraphController.styles.css';
import AddParagraphFormComponent from "../AddParagraphForm/AddParagraphForm.component";

export default class ParagraphControllerComponent extends React.Component {
    render() {
        return(
            <div className='Paragraph-Controller'>
                <AddParagraphFormComponent/>
            </div>
        );
    }
}
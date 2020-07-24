import React from "react";

import './ParagraphController.styles.css';
import AddParagraphFormComponent from "../AddParagraphForm/AddParagraphForm.component";
import {Link} from "react-router-dom";

export default class ParagraphControllerComponent extends React.Component {
    render() {
        return(
            <div className='Paragraph-Controller'>
                <AddParagraphFormComponent/>
                <Link to='/'>
                    <button>Back</button>
                </Link>
            </div>
        );
    }
}
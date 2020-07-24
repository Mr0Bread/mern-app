import React, {Suspense, lazy} from "react";

import ParagraphFlexContainerComponent from "../ParagraphFlexContainer/ParagraphFlexContainer.component";

const ParagraphComponent = lazy(() => import("../Paragraph/Paragraph.component"));

export default class ParagraphsWidgetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paragraphs: <p>None</p>
        }
    }

    async renderParagraphs() {
        const paragraphs = await this.fetchParagraphs();
        let paragraphsItems = [];

        paragraphs.map(paragraph => paragraphsItems.push(
            <Suspense fallback={<span>Loading...</span>} >
                <ParagraphComponent text={paragraph.text} title={paragraph.title}/>
            </Suspense>
        ));

        this.setState({
            paragraphs: paragraphsItems
        })
    }

    componentDidMount() {
        this.renderParagraphs();
    }

    render() {
        const {paragraphs} = this.state;

        return (
            <span>
                <h2>Paragraphs: </h2>

                <ParagraphFlexContainerComponent>
                    {paragraphs}
                </ParagraphFlexContainerComponent>
            </span>
        );
    }

    async fetchParagraphs() {
        return fetch('http://localhost:5000/paragraph').then(res => res.json());
    }
}
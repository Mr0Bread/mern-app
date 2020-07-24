import React, { Suspense, lazy } from "react";

import './HomePage.styles.css';
import ParagraphFlexContainerComponent from "../ParagraphFlexContainer/ParagraphFlexContainer.component";

const ParagraphComponent = lazy(() => import('../Paragraph/Paragraph.component'));

export default class HomePageComponent extends React.Component{
    render() {
        return (
            <main className='HomePage'>
                <Suspense fallback={<span>Loading paragraphs...</span>}>
                    <ParagraphFlexContainerComponent>
                        <ParagraphComponent title='edit'/>
                        <ParagraphComponent title='edit'/>
                        <ParagraphComponent title='edit'/>
                        <ParagraphComponent title='edit'/>
                        <ParagraphComponent title='edit'/>
                        <ParagraphComponent title='edit'/>
                        <ParagraphComponent title='edit'/>
                    </ParagraphFlexContainerComponent>
                </Suspense>
            </main>
        );
    }
}
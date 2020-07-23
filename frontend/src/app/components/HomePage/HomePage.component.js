import React, { Suspense, lazy } from "react";

import './HomePage.styles.css';

const ParagraphComponent = lazy(() => import('../Paragraph/Paragraph.component'));

export default class HomePageComponent extends React.Component{
    render() {
        return (
            <main className='HomePage'>
                <Suspense fallback={<span>Loading paragraph...</span>}>
                    <ParagraphComponent title='edit'/>
                </Suspense>
            </main>
        );
    }
}
import React, {Suspense, lazy} from "react";

import './HomePage.styles.css';

const ParagraphsWidgetComponent = lazy(() => import("../ParagraphsWidget/ParagraphsWidget.component"));
const UsersWidgetComponent = lazy(() => import("../UsersWidget/UsersWidget.component"));

export default class HomePageComponent extends React.Component {
    render() {
        return (
            <main className='HomePage'>
                <Suspense fallback={<span>Loading paragraphs...</span>}>
                    <ParagraphsWidgetComponent/>
                </Suspense>
                <Suspense fallback={<span>Loading users...</span>}>
                    <UsersWidgetComponent/>
                </Suspense>
            </main>
        );
    }
}
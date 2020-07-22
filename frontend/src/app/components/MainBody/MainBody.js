import React from "react";

export default class MainBody extends React.Component {
    render() {
        return(
            <div className={this.props.class}>
                {this.props.children}
            </div>
        );
    }
};
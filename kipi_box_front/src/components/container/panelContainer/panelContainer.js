import React, { Component } from 'react';
import './panelContainer.css';
import PostWrapper from '../postWrapper/postWrapper';

class PanelContainer extends React.Component {
    render() {
        return (
            <div className="PanelContainer">
                <PostWrapper/>
            </div>
        );
    }
}

export default PanelContainer;
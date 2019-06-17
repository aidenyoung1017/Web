import React, { Component } from 'react';
import './postWrapper.css';
import Navigate from '../../presentational/navigate/navigate';
import Panel from '../../presentational/panel/panel';

class PostWrapper extends React.Component {
    render() {
        return (
            <div className="PostWrapper">
                <div className="PostWrapper_Panel">
                    <Panel/>
                </div>
                <div className="PostWrapper_Menu">
                    <Navigate/>
                </div>
            </div>
            
            
        );
    }
}

export default PostWrapper;
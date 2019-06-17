import React, { Component } from 'react';
import './panel.css';
import Home from '../home/home';

class Panel extends React.Component {
    render() {
        const state = 1;

        if (state === 1) {
            return (
                <div className="Panel">
                    
                    <Home/>
                </div>
            );
        }
        
    }
}

export default Panel;
import React, { Component } from 'react';
import './home.css';
import face from '../../../image/face.png'

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="panel_boxname">
                    Apple's Kipi Box
                </div>
                <li className="panel_detail">
                    <img src={face} className="face_img" alt="face" onClick={faceChange}/>
                    <a className="hero__cta" onClick={ButtonFunction}>
                    Start Now
                    </a>
                </li>
                

            </div>
            
        );
    }

}

function Detail(){
    
}

function ButtonFunction() {
    console.log("Button_click");
}

function faceChange() {
    console.log("face_click");
}

export default Home;
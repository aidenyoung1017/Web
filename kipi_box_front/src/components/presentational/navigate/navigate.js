import React, { Component } from 'react';
import './navigate.css';
import connectWhite from '../../../image/connectWhite.png'
import homeWhite from '../../../image/homeWhite.png'
import settingWhite from '../../../image/settingWhite.png'
import storageWhite from '../../../image/storageWhite.png'
import usersWhite from '../../../image/usersWhite.png'



class Navigate extends React.Component {
    render() {
        
        
        return (
            <div className="Navigate">               
                <img id="home" src={homeWhite} className="Navigate_img" alt="homeWhite" onClick={homeFunction}/>
                <img src={connectWhite} className="Navigate_img" alt="connectWhite" onClick={connectFunction}/>
                <img src={storageWhite} className="Navigate_img" alt="storageWhite" onClick={storageFunction}/>
                <img src={usersWhite} className="Navigate_img" alt="usersWhite" onClick={userFunction}/>
                <img src={settingWhite} className="Navigate_img" alt="settingWhite" onClick={settingFunction}/>
            </div>
        );
    }
}

function homeFunction() {
    console.log("home_click");
}

function connectFunction(){
    console.log("connect_click");
}

function storageFunction(){
    console.log("storage_click");
}

function userFunction(){
    console.log("users_click");
}

function settingFunction(){
    console.log("setting_click");
}


export default Navigate;
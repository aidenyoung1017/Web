import React, { Component } from 'react';
import './panel.css';

class Panel extends React.Component {
    render() {
        return (
            <div style="border:1px solid; padding:10px;">
            저 버스 표지판에 적힌 지명들은 이 세상에 존재하지 않는 곳이거나 누구도 갈 수 없는 곳인 양 여겨지고 있다. 저 약재상과 이불 가게의 진열창을 침수시킨 어둠은 내가 항시 보던 어둠과 전혀 달라 어떤 탐미적 이질감마저 느껴지고 있다.
            
            상점 안에 보이는 저 상인들조차도 단순히 뭔가를 팔고 있는 것이 아니라, 인생이라는 우울한 사건을 꾸미러 온 정체 불명의 존재들처럼 여겨지고 있다.
            </div>
        );
    }
}

export default Panel;
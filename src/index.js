import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Sliders from './components/Sliders';

const Img = [
    {
        name: '启示录',
        user: '燕十三',
        num: 0.99,
        img: require('./imgs/1.jpg'),
    },
    {
        name: '呦西',
        user: '米小米',
        num: 4.99,
        img: require('./imgs/2.jpg'),
    },
    {
        name: '鱿鱼',
        user: '小麦',
        num: 2.99,
        img: require('./imgs/3.jpg'),
    },
    {
        name: '每日一次',
        user: '次',
        num: 1.99,
        img: require('./imgs/1.jpg'),
    },
    {
        name: '启示录',
        user: '燕十三',
        num: 0.99,
        img: require('./imgs/2.jpg'),
    },
    {
        name: '乌鸦传说',
        user: '罐头',
        num: 3.99,
        img: require('./imgs/3.jpg'),
    },
];


ReactDOM.render(
    <Sliders
        images={Img}
        speed={1}
    />, document.querySelector('#root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

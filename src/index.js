import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First_components,{ Demo } from './component/Firstcomponent';
import {Gallery,Profile} from './component/Gallery';
import Gallery1 from './component/Gallery1';
import Profile1 from './component/Profile1';
import Task10 from './component/Task10';
import Demo_22 from './component/Demo_22';
import Style from './component/Style';
import Day from './component/Day';
import Menu from './component/Menu';
import CounterCamp from './component/CounterCamp';
import LikeCapm from './component/LikeCapm';
import DemoTodo from './component/DemoTodo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Demo/> */}
    {/* <Gallery/>
    <Profile/>
    <Gallery1/>
    <Profile1/> */}
    {/* <Task10 x="20" y="30" /> */}
    {/* <Task10/>   */}
    {/* <Demo_22/>   */}
    {/* <Style/> */}
    {/* <Day/> */}
    {/* <CounterCamp count="1"  /> */}
    {/* <CounterCamp  /> */}
    {/* <Menu/> */}
    <DemoTodo/>
    {/* <LikeCapm count1="300" count2="50"/> */}

    

    {/* <First_components/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

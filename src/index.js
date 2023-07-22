import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First_components,{ Demo } from './component/Firstcomponent';
import {Gallery,Profile} from './component/Gallery';
import Gallery1 from './component/Gallery1';
import Profile1 from './component/Profile1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Demo/> */}
    <Gallery/>
    <Profile/>
    <Gallery1/>
    <Profile1/>
    

    {/* <First_components/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

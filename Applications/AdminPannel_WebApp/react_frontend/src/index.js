/* TODO: base versioning upon "version" specified inside package.json */

import React from 'react';
import ReactDOM from 'react-dom/client';

//TODO: ADD react-draggable module to implement drag&drop features

import './index.css';
import './defaultApps.css';
import GeneralOpsApp from './GeneralOps_App/GeneralOpsApp.js';
import SpecMonitorApp from './SpecMonitor_App/SpecMonitor_App.js';
import reportWebVitals from './reportWebVitals';

let version = () => {
  //TODO: http request to backend for version to the version inside the backend "packade.json" file
  return "0.0.0"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <section class="headerLayout">
      <div class="pannelGlassBackground title">AdminPannel_WebApp</div>
      <div class="pannelGlassBackground version">Version: {version()}</div>
    </section>
    
    <section class="webAppLayout">
      <div class="sidebar"><SpecMonitorApp/></div>
      <div class="body"><GeneralOpsApp/></div> 
    </section>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

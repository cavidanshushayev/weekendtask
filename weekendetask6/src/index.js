import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Task1 from './Task1';
import Task2 from './Task2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <p>Task1</p>
    <Task1 />
    <p>Task2</p>
    <Task2/>
    <p>task3</p>
    <App />
  </>
);


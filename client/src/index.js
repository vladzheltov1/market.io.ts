import React from 'react';
import ReactDOM from 'react-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import App from './App';
import "./index.scss";

const __ROOT__ = document.getElementById("application");

ReactDOM.render(
    <App />,
    __ROOT__
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';


//global defaults for axios
const apiKey = 'keyyxfDwNZrcMcpyD';
axios.defaults.baseURL = 'https://api.airtable.com/v0/appAW1lLOcstzdVWg/';
axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

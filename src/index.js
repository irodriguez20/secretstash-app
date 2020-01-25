import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlus, faChevronLeft, faTrashAlt, faEdit, faRecycle, faTree
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'

library.add(faPlus, faChevronLeft, faTrashAlt, faEdit, faRecycle, faTree)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);


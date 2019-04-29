/*
This client applies BrowserRouter.
You can connect to Redux later by using 'Provider' in here.
*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const Root = () => (
    // <BrowserRouter>
        <App/>
    // </BrowserRouter>
);

export default Root;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Form from './form';
import Formik from './formik';
import Redux from './redux';

const Routers = () => {
    return <BrowserRouter>
    <Routes path='/'>
        {/* <Route path = "/" Component={Form}> */}
        {/* <Route path="/" Component={Formik}> */}
        <Route path="redux" Component={Redux}>
        </Route>
    </Routes>
    </BrowserRouter>
    
}

export default Routers;

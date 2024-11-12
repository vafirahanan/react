import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoRedux from '../pages/todoredux';



const Router = () => {
    return <BrowserRouter>
      <Routes path='/'>
      <Route path="todo" Component={TodoRedux}/>
      </Routes>
    </BrowserRouter>
}

export default Router;

import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import UseEffect from '../pages.jsx/useEffect';
import SingleView from '../components/singleview';
import Todo from '../pages.jsx/Todo';
import Viewtodo from '../pages.jsx/viewtodo';
import Editpage from '../pages.jsx/Editpage';
import Notfound from '../pages.jsx/notfound';

const Router = () => {

    return <BrowserRouter>
    <Routes>
            <Route path="/"> 
                <Route path="" Component={UseEffect} />
                <Route path="single-view">
                    <Route path=":id" Component={SingleView} />
                </Route>
                <Route path="todo">
                    <Route path="" Component={Todo} />
                    <Route path="view">
                        <Route path=":id" Component={Viewtodo} />
                    </Route>
                    <Route path="edit">
                        <Route path=":id" Component={Editpage} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" Component={Notfound} />
        </Routes>
    </BrowserRouter>
       
}

export default Router;

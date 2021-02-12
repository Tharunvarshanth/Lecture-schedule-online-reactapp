import React ,{ Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Header from '../src/components/header'

import RouterConfig from "./navigation/RouterConfig";

function  App(){

    return(
        <>
            <Header/>
            <Router>
               <RouterConfig/>
           </Router>
        </>
    )


}
export default App;

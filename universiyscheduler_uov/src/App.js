import React ,{ Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import Home from "./Home"

import LectureApp from "./components/Lecture/LectureApp";
import ViewTimeTable from "./components/Student/ViewTimeTable";

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Lecture-Home"  component={LectureApp} />
                <Route path="/View-TT"  component={ViewTimeTable} />
            </Switch>
        </Suspense>
    </Router>
);

export default App;

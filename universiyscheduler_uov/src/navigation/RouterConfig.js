import React, {Suspense} from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {ROOT,LECTUREHOME,VIEWTIMETTABLE} from "./CONSTANTS";
import {NotFound} from "./NotFound";

import Authorization from '../pages/HomePage'
import Lecturepage from '../pages/LecturePage'
import StudentPage from '../pages/StudentPage'

function RouterConfig(){

    return(
            <div>
                {  !localStorage.getItem("username")  ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path={ROOT} component={Authorization}/>
                        <Route path={LECTUREHOME} component={Lecturepage}/>
                        <Route path={VIEWTIMETTABLE} component={StudentPage}/>
                        <Route path="*"> <NotFound/> </Route>
                    </Switch>
                </Suspense>
                ):
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>

                            <Route path={LECTUREHOME} component={Lecturepage}/>
                            <Route path={VIEWTIMETTABLE} component={StudentPage}/>
                            <Route path="*"> <NotFound/> </Route>
                        </Switch>
                    </Suspense>
                }
            </div>

    );
}

export default RouterConfig;


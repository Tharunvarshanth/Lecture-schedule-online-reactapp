import React, {Component} from 'react';
import TimeTable from "./TimeTable";

import Header from "../header";
import FormAddUpdate from "./FormAddUpdate";

class LectureApp extends Component {
    render() {
        return (
            <div>
                 <Header/>
                 <TimeTable />
                 <FormAddUpdate />
            </div>
        );
    }
}

export default LectureApp;
import React, {useEffect} from "react";
import './styles/table.css'



function Table(props){



    return (
        <table border="1" className="container table table-hover">
            <thead className="thead-dark">
             <tr>
                 <th>Course-Code</th><th>Lecture</th><th>Year</th><th>Semester</th><th>Time</th><th>Meeting Url</th><th>Remove</th>
             </tr>
            </thead>
            <tbody>
            {props.data.map(l=>{
                return(
                <tr key={l.code}>
                    <td>{l.code}</td>
                    <td>{l.lecture}</td>
                    <td>{l.year}</td>
                    <td>{l.sem}</td>
                    <td>{l.time}</td>
                    <td>{l.meeting_url}</td>
                    <td  className="span1">
                        <button className="btn btn-danger" value={l.code} onClick={props.removefunc} >
                            <i className="fa fa-remove"></i></button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
    )
}


export default Table




import React, {useEffect, useState} from "react";
import '../styles/ViewTimeTable.css'
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../header";



function ViewTimeTable(){

     const location =useLocation();
    const [department,setdepartment ] = useState(" ");
    const [courselist,setcourselist] = useState([]);


    useEffect(()=>{

        const urlParams = new URLSearchParams(location.search);
        const pr =urlParams.get('deparment')
        setdepartment(urlParams.get('deparment'))

        axios.get("http://localhost:8002/gettimetable",{params:{dep:pr}})
            .then(res=>{
                    setcourselist(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[department])

    return(
        <div>
            <Header/>
         <div className="container">

             <table className="table">
                 <thead className="thead-dark">
                 <tr>
                     <th>Course-Code</th>
                     <th>Lecture</th>
                     <th>Year</th>
                     <th>Semester</th>
                     <th>Time</th>
                     <th>Meeting Url</th>
                 </tr>
                 </thead>
                 <tbody>
                 { courselist.map(l=>{
                 return(
                     <tr key={l.code}>
                         <td>{l.code}</td>
                         <td>{l.lecture}</td>
                         <td>{l.year}</td>
                         <td>{l.sem}</td>
                         <td>{l.time}</td>
                         <td>{l.meeting_url}</td>
                     </tr>
                         )
                 })}
                 </tbody>

             </table>
         </div>
        </div>
    )

}


export default ViewTimeTable;
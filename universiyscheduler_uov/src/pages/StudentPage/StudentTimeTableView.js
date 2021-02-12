import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import fetchcourselist from "../../services/nodejsservices/fetchcourselist";
import Header from "../../components/header";
import '../../styles/ViewTimeTable.css'
import getyearlist from "../../services/nodejsservices/getyearlists";
import fetchtimetablebyyear from "../../services/nodejsservices/fetchtimetablebyyear";
function StudentTimeTableView(){

    const location = useLocation();
    const [department,setdepartment ] = useState(" ");
    const [courselist,setcourselist] = useState([]);
    const [academicyearlist,setacademicyearlist] = useState([]);
    const [academicyear,setacademicyear] = useState('');


    useEffect ( () => {

        const urlParams =  new URLSearchParams(location.search);
        const pr =  urlParams.get('deparment')
        setdepartment(urlParams.get('deparment'))
        console.log("pr",pr)

        async function fetchData(){
            setcourselist(await  fetchcourselist(pr))
        }
        async function fetchyearlist(){
             setacademicyearlist(await  getyearlist(pr))
        }
        fetchyearlist();
        fetchData();


    },[])

    const ttacademicyearchangehandle=async (e)=>{

            setacademicyear(e.target.value)
        setcourselist(await  fetchtimetablebyyear({dep:department,year:e.target.value}))

    }

    return(

        <div>
            <Header/>

            <div className="container">
                <select className="form-control" name="academicyear" value={academicyear}
                        onChange={ttacademicyearchangehandle}>
                    {academicyearlist.map(ttay => {
                        return (
                            <option value={ttay}>{ttay}</option>
                        )
                    })
                    }
                </select>
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


export default StudentTimeTableView;

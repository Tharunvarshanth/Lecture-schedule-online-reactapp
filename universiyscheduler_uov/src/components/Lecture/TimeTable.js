import React, {Component} from 'react';
import axios from 'axios'
import '../styles/timetable.css'
import Table from "../Table";


class TimeTable extends Component {

    constructor() {
        super();


        this.state ={
           ttdepartment:"physics",
            ttdepartmentlist:[],
            timetable:[]

        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getdepartment")
            .then(response => {
                   this.setState({
                       ttdepartmentlist:response.data
                   })
            })
            .catch(error => {
                console.log(error)
            })
    }

    ttdepchangehandel=(e)=>{


        this.setState({
            ttdepartment:e.target.value
        })
    }
    viewtt=()=>{
        console.log(this.state.ttdepartment)

        axios.get("http://localhost:8002/gettimetable",{params:{dep:this.state.ttdepartment}})
            .then(res=>{
                this.setState({
                    timetable:res.data
                })
            })
            .catch(err=>{
                console.log(err)
            })

    }

    removelecture=(e)=>{
        console.log(e.target.value)
        var coursecode=e.target.value
        var year,semester;

        if(coursecode.slice(-5,-4)==1){
            year="firstyear"
        }
        else if(coursecode.slice(-5,-4)==2){
            year="secondyear"
          }
        else if(coursecode.slice(-5,-4)==3){
            year="thirdyear"
        }
        else if(coursecode.slice(-5,-4)==4){
            year="fourthyear"
        }

        if(coursecode.slice(-4,-3)==1){
            semester="sem1"
        }
        else if(coursecode.slice(-4,-3)==2){
            semester="sem2"
        }


        axios.post("http://localhost:8002/removeschedule",{dbname:this.state.ttdepartment,year:year,semester:semester,code:e.target.value,lecture:localStorage.getItem("useremail"),time:" ",meetingurl:" "})
            .then(response =>{
                console.log(response)

            })
            .catch(err=> {
                console.log(err)
            })

    }

    render() {
        return (
            <div className="bodytt table-responsive-md">

                <div className="card bg-success text-white">
                <div className="card-body">Hello {localStorage.getItem("username")}!</div>
                </div>

                <select className="form-control" name="ttdep" value={this.state.ttdepartment} onChange={this.ttdepchangehandel}>
                    {this.state.ttdepartmentlist.map(ttdep=>{
                        return(
                         <option value={ttdep.db_name} >  {ttdep.name}</option>
                        )
                    })}
                </select><br/>

                <button className="btn btn-info" type="submit" onClick={this.viewtt}> View Time Table </button>
               &nbsp;&nbsp; <span className="text-danger">Note: *Course Schedule Can be remove by who make that schedule</span><br/>
                {this.state.timetable!=[]?  <Table  data={this.state.timetable} removefunc={this.removelecture} /> :null}



            </div>
        );
    }
}

export default TimeTable;
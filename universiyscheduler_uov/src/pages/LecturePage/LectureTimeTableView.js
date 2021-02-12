import React, {Component} from 'react';
import getdepartmentlist from "../../services/springbootservices/getdepartmentlist";
import fetchcourselist from "../../services/nodejsservices/fetchcourselist";
import removeonecourseschedule from "../../services/nodejsservices/removeonecourseschedule";
import Table from "../../components/Table";
import '../../styles/timetable.css'
import getyearlist from "../../services/nodejsservices/getyearlists";
import fetchtimetablebyyear from "../../services/nodejsservices/fetchtimetablebyyear";




class LectureTimeTableView extends Component {

    constructor() {
        super();


        this.state ={
            ttdepartment:"",
            ttdepartmentlist:[],
            timetable:[],
            ttacademicyearlist:[],
            ttacademicyear:''
        }
    }

    async componentDidMount() {



        this.setState({
            ttdepartmentlist:await  getdepartmentlist()
        })

    }

    ttdepchangehandel= async(e)=>{
        this.setState({
            ttdepartment:e.target.value
        })

        this.setState({
            ttacademicyearlist:await getyearlist(e.target.value)
        })
    }

    ttacademicyearchangehandle=(e)=>{
        this.setState({
            ttacademicyear:e.target.value
        })
    }

    viewtt=async ()=>{

        console.log(this.state.ttdepartment)

       if(this.state.ttacademicyear!=''){
           console.log("hi")
           this.setState({
               timetable:await fetchtimetablebyyear({dep:this.state.ttdepartment,year:this.state.ttacademicyear})
           })
            this.setState({
                ttacademicyear:''
            })
       }
       else {
           this.setState({
               timetable: await fetchcourselist(this.state.ttdepartment)
           })
       }

    }

    removelecture=async (e)=>{
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

        await  removeonecourseschedule({dbname:this.state.ttdepartment,year:year,semester:semester,code:e.target.value,lecture:localStorage.getItem("useremail"),time:" ",meetingurl:" "})


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
                {this.state.ttdepartment ?
                    <select className="form-control" name="academicyear" value={this.state.ttacademicyear}
                            onChange={this.ttacademicyearchangehandle}>
                        {this.state.ttacademicyearlist.map(ttay => {
                            return (
                                <option value={ttay}>{ttay}</option>
                            )
                        })
                        }
                    </select>
                :null
                }
                <button className="btn btn-info" type="submit" onClick={this.viewtt} disabled={!this.state.ttdepartment}> View Time Table </button>
                &nbsp;&nbsp; <span className="text-danger">Note: *Course Schedule Can be remove by who make that schedule</span><br/>
                {this.state.timetable!=[]?  <Table  data={this.state.timetable} removefunc={this.removelecture} /> :null}



            </div>
        );
    }
}

export default LectureTimeTableView;





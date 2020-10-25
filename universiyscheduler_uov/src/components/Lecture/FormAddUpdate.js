import React, {Component} from 'react';
import "../styles/formaddupdate.css";
import axios from "axios";




class FormAddUpdate extends Component {

  constructor(props) {
      super(props);
    //  this.getcoursecode.bind(this)

      this.state ={
          formdepartment:"software_engineering",
          formyear:"firstyear",
          formsem:"sem1",
          formcode:"",
          formcodelist:[],
          formtime:"",
          formmettingurl:"",
          formdepartmentlist:[]
      }
  }


      componentDidMount() {
          axios.get("http://localhost:8080/getdepartment")
              .then(response => {
                  this.setState({
                      formdepartmentlist:response.data
                  })
              })
              .catch(error => {
                  console.log(error)
              })
     //  console.log({dbname:this.state.formdepartment,year:this.state.formyear,semester:this.state.formsem})
        // this.getcoursecode.bind(this)
         this.getcoursecode()

      }



     getcoursecode(){
        axios.post("http://localhost:8002/getcoursecode",{dbname:this.state.formdepartment,year:this.state.formyear,semester:this.state.formsem})
            .then(response =>{
                this.setState({
                    formcodelist: response.data
                })
                console.log(this.state.formcodelist)
            })
            .catch(err=> {
                console.log(err)
            })
    }



    formDepartmenthandle=(e)=>{

        this.setState({
            formdepartment:e.target.value
        })
        axios.post("http://localhost:8002/getcoursecode",{dbname:e.target.value,year:this.state.formyear,semester:this.state.formsem})
            .then(response =>{
                this.setState({
                    formcodelist: response.data
                })
                console.log(this.state.formcodelist)
            })
            .catch(err=> {
                console.log(err)
            })
      //  this.getcoursecode()

    }
    formYearhandle=(e)=>{
      this.setState({
          formyear:e.target.value
      })
        axios.post("http://localhost:8002/getcoursecode",{dbname:this.state.formdepartment,year:e.target.value,semester:this.state.formsem})
            .then(response =>{
                this.setState({
                    formcodelist: response.data
                })
                console.log(this.state.formcodelist)
            })
            .catch(err=> {
                console.log(err)
            })
       // this.getcoursecode()

    }
    formSemhandle=(e)=>{
        this.setState({
            formsem:e.target.value
        })

        axios.post("http://localhost:8002/getcoursecode",{dbname:this.state.formdepartment,year:this.state.formyear,semester:e.target.value})
            .then(response =>{
                this.setState({
                    formcodelist: response.data
                })
                console.log(this.state.formcodelist)
            })
            .catch(err=> {
                console.log(err)
            })
    }
    formCoursehandle=(e)=>{
        this.setState({
            formcode:e.target.value
        })
    }

    formTimehandle=(e)=>{
      this.setState({
          formtime:e.target.value
      })
    }
    formMeetinghandle=(e) =>{
      this.setState({
          formmettingurl:e.target.value
      })
    }

    formHandle=(e)=>{
      console.log({dbname:this.state.formdepartment,year:this.state.formyear,semester:this.state.formsem,lecture:localStorage.getItem("useremail"),time:this.state.formtime,meetingurl:this.state.formmettingurl,code:this.state.formcode})
     if(this.state.formcode!="") {

         axios.post("http://localhost:8002/updateschedule", {
             dbname: this.state.formdepartment,
             year: this.state.formyear,
             semester: this.state.formsem,
             code: this.state.formcode,
             lecture: localStorage.getItem("useremail"),
             time: this.state.formtime,
             meetingurl: this.state.formmettingurl
         })
             .then(response => {
                 console.log(response.data)

             })
             .catch(err => {
                 console.log(err)
             })

     }
     else{
          window.alert("Choose th course code")
          e.preventDefault()
     }

    }

    render() {
        return (
            <div className="formbody">
                <span>Add course schecule or change the lecture schedules</span>
                <form className="formcourse" onSubmit={this.formHandle}>
                     <button className="btn btn-primary" >Add/Update</button>
                        <br/>   <br/>   <br/>
                      <label>Choose Department</label>
                       <select className="form-control" name="formdep" onChange={this.formDepartmenthandle }>
                        {this.state.formdepartmentlist.map(ttdep=>{
                            return(
                                <option value={ttdep.db_name} >  {ttdep.name}</option>
                            )
                        })}
                    </select>
                    <br/><br/>
                    <label>Choose Year</label><br/>
                    <select className="form-control" onChange={this.formYearhandle}>
                        <option value="firstyear">1</option>
                        <option value="secondyear">2</option>
                        <option value="thirdyear">3</option>
                        <option value="fourthyear">4</option>

                    </select>

                    <br/><br/>
                    <label>Choose Semester</label><br/>
                    <select className="form-control" onChange={this.formSemhandle}>
                        <option value="sem1">1</option>
                        <option value="sem2">2</option>
                    </select>
                    <br/><br/>

                    <label>Choose Course Code</label><br/>
                    <select onChange={this.formCoursehandle}>
                        {this.state.formcodelist.map(c=><option value={c.code}>{c.code}</option>)}
                    </select>
                       <br/><br/>
                    <label>Time</label><br/>
                    <input className="form-control" type="text" onChange={this.formTimehandle} value={this.state.formtime} placeholder="Start Time -EndTime weekdays"/>
                     <br/><br/>
                    <label>Meeting Url</label><br/>
                    <input className="form-control" type="url" value={this.state.formmettingurl} onChange={this.formMeetinghandle} />


                </form>

            </div>
        );
    }
}

export default FormAddUpdate;
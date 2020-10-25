import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import img from './images/klnbuild.jpg'
import './styles/indexbody.css';
import  {useFormik} from "formik";
import axios from "axios";

function IndexBody(){

    const [email,setEmail] = useState("")
    const [password,setPassword]   = useState("")
    let lecture={email:"",password:""}
    let history = useHistory();

const  initialValues = {
    email:'',
    password:''
}
const  validate =(values)=>{
    let errors={};
    if(!values.password){
        errors.password="required"
    }
    if(!values.email){
        errors.email="required"
    }

    console.log(errors)
    return errors

}

    const formik = useFormik({

         initialValues,
         validate,
        onSubmit: values =>{
            setEmail(values.email)
            setPassword(values.password)
            //console.log(email)
            lecturefunc()
        }


    })

    function  lecturefunc(){

        lecture.email=formik.values.email;
        lecture.password=formik.values.password;

        var lecval=(formik.values.email).search("@var.ac.lk");
        var stuval = (formik.values.email).search(("stu.ac.lk"))
      //  console.log(localStorage.getItem("useremail"))

        if(lecval!=-1) {


            axios.post("http://localhost:8080/signin", lecture)
                .then(response => {

                    if(response.data){
                        localStorage.setItem("username",response.data.name);
                        localStorage.setItem("useremail",response.data.email);
                        history.push("/Lecture-Home")
                    }
                    else{
                        window.alert("User not exists")
                    }


                })
                .catch(error => {
                    console.log(error)
                })
        }
        else if(stuval!=-1){
            axios.post("http://localhost:8080/studentlogin", lecture)
                .then(response => {
                    if(response.data) {
                        localStorage.setItem("username", response.data.name);
                        localStorage.setItem("useremail", response.data.email);
                        history.push({
                            pathname:"/View-TT",
                            search:"?deparment="+response.data.department
                        })
                    }
                    else{
                        window.alert("User not exists")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else{
            window.alert("User not exists")
        }



    }


    return(
       <div className="body">
        <img src={img} width="100%"/>

           <div className="card  text-white">
               <div className="card-body">           <h2>Online Lecture Schedule</h2>
               </div>
           </div>


           <div id="formlec" className="form">

                <form  onSubmit={formik.handleSubmit} name="loginform">
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" id="lecture"  name="lecture"> <b> Lecturer/Student </b> </button>

                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control"  type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  />
                          {formik.touched.email && formik.errors.email  ?<span className="text-danger"> {formik.errors.email}  </span> :null}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control"  type="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} /><br/>
                        {formik.touched.password && formik.errors.password ? <span className="error"> {formik.errors.password} </span> :null}
                    </div>

                </form>
           </div>


       </div>
    )


}

export default IndexBody;
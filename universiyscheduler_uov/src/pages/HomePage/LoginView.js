import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import logincheck from "../../services/springbootservices/lecturelogin";
import {LECTUREHOME, VIEWTIMETTABLE} from "../../navigation/CONSTANTS";
import studentlogin from "../../services/springbootservices/studentlogin";
import img from "../../assets/images/klnbuild.jpg";
import '../../styles/indexbody.css'

function LoginView(){

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

    async function   lecturefunc(){

        lecture.email=formik.values.email;
        lecture.password=formik.values.password;

        var lecval=(formik.values.email).search("@var.ac.lk");
        var stuval = (formik.values.email).search(("stu.ac.lk"))
        //  console.log(localStorage.getItem("useremail"))

        if(lecval!=-1) {

            var res = await  logincheck(lecture)
            console.log(res)
            if(res=="no-data"){
                alert("User not signup")
            }
            else if(res=="error"){
                alert("error in sign in try again later")
            }
            else{
                localStorage.setItem("username",res.name);
                localStorage.setItem("useremail",res.email);
                history.push(LECTUREHOME)
            }

        }
        else if(stuval!=-1){

            var response = await studentlogin(lecture)

            if(response=='no-data'){
                alert("User not signup")
            }
            else if(response=='error'){
                alert("error in sign in try again later")
            }
            else{
                console.log(response)
                localStorage.setItem("username", response.name);
                localStorage.setItem("useremail", response.email);
                history.push({
                    pathname:VIEWTIMETTABLE,
                    search:"?deparment="+response.department
                })
            }
        }
        else{
            alert('Wrong details')
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

export default LoginView;

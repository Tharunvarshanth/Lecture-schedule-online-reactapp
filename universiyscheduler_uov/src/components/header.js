import React, {useEffect} from "react";
import './styles/header.css';

function Header(){

    useEffect(()=>{
        if(!localStorage.getItem("username")){
            document.getElementById("logout").style.display="none"
        }
    })

    function logout(){
        console.log("logout")
        localStorage.clear();
    }

    return (
        <div className="container-fluid">

            <h2 className="text-left">University of VarThar</h2>
            <nav >
                <ul >
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="#">University Home</a></li>
                    <li><a href="#">Faculty Home</a></li>
                    <li id="logout"><a onClick={logout} href="http://localhost:3000/">Logout</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
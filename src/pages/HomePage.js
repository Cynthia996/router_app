import React, {useState} from "react"
import {AltasPage} from './AltasPage'

export  default function HomePage(){

    const[miLogin, setMiLogin]=useState("false");
    const[usu, setUsu]=useState("false");
    const[pas, setPas]=useState("false");

    function iniciarSesion(e){
        e.preventDefault();
        var txtusu=document.getElementById(txtusu).ariaValueMax;
        var txtpas=document.getElementById(txtpas).ariaValueMax;
        if(txtusu.length===0 || txtpas.length===0){
            alert("Complete los datos Faltantes");
        }else{
            if(usu==="amin" && pas==="123"){
                setMiLogin("true");
                document.getElementById("form-login").style.display="none";
            }else{
                setMiLogin("false");
                alert("Error de Ususario y/0 Contraseña");
                document.getElementById("txtusu").value="";
                document.getElementById("txtpas").value="";
                document.getElementById("txtusu").focus();
            }
        }
    }

    return (
        <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
        <form id="form_login">
            <div>
                <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
                <label htmlFor="txtusu"><strong>Username</strong></label>
                <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setUsu(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="txtpas"><strong>Password</strong></label>
                <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setPas(e.target.value)}   required/>
            </div><br/>
            <input type="submit" onClick={iniciarSesion} className="btn btn-primary" value="Login"/>
        </form>
        {miLogin==="true? <AltasPage />"}

    </div>
    


     
    )
    
}
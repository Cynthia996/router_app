import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))


document.querySelector('#boton').addEventListener('click', traerDatos);
function traerDatos(){
    
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','productos.json',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
        
            let datos=JSON.parse(this.responseText);
            let res=document.querySelector('#res');
            res.innerHTML='';

            for(let item of datos){
                res.innerHTML +=
                <tr>
                    <td>${item.producto}</td>
                    <td>${item.precio}</td>
                </tr>
            }

        }
    }
}
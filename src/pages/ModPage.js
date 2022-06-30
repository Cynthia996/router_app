export default function ModPage(){
    return (
        <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">
          Listado De Registro De Productos
        </div>
        <div class="btn">LISTAR</div>

        <div className="table-responsive">
          

 
          <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
                <thead className="text-center" style={{background:"lightgray"}}>
                    <tr>
                        <th>PRODUCTOS</th>
                        <th>CLASE</th>
                        <th>PRECIO</th>
                    </tr>
                </thead>
                <tbody className="text-center align-baseline">
                    
                </tbody>
            </table>
          </> 
          
          

        </div>
     
      </div>
    
    )
}
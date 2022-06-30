export default function AltasPage(){
    return(
        <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">
          Formulario De Registro De Productos
          <br/>
          <form id="miFormulario"  >
            <div className="row" style={{marginTop:20}}>
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Ingrese Producto" required  />
              </div>

              <div className="col-6">
                <select className="form-select form-select-lg text-center" required  >
                  <option value="">Indique Clase</option>
                  <option value="Ferreteria">Ferreteria</option>
                  <option value="Pintureria">Pintureria</option>
                  <option value="Materiales de Construccion">Materiales de Construccion</option>
                </select>
              </div>
            </div>
            
            <div className="row" style={{marginTop:20}}>
              <div className="col-6">
                <select className="form-select form-select-lg text-center" required  >
                  <option value="">Indique Precio</option>
                  
                </select>
              </div>
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Digite El Precio" required  />
              </div>
            </div>

            <div className="row" style={{marginTop:20}}>
              <div className="col">
                <button className="btn btn-primary btn-lg">Guardar Datos</button>
              </div>
            </div>
          </form>
        </div>
                
      </div>

    )
    
}
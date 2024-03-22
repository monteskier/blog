
export const CheckingAuth = () => {
  return (
  
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-6">
          <div className="row d-flex justify-content-between algin-items-center">
            <div className="col-12  justify-self-center text-center align-self-center ">
            <div className="spinner-border text-primary"  style={{width:'4rem', height:'4rem'}} role="status">
             <span className="visually-hidden">Cargando...</span>
            </div>
            </div>            
          </div>           
        </div>
      </div>
    </div>       
  )
  
}

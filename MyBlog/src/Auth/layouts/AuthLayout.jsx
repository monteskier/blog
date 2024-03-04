
export const AuthLayout = ({children, title=''}) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-6 login_box">
          <div className="row d-flex justify-content-between algin-items-center">
            <div className="col-12  justify-self-center text-center align-self-center ">
              <h4 className="title_login">{title}</h4>
            </div>
            <hr />
          </div> 
          {children}
        </div>
      </div>
    </div>       
  )
}

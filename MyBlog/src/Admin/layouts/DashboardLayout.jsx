import { AsideApp } from "../components"

export const DashboardLayout = ({children, title_form='Nueva entrada'}) => {
  return (


    <div className="container-fluid">
      <div className="row">
        <AsideApp elements={[]}></AsideApp>
        <main className="main col">
          <div className="row">
            <div className="columna col-12 col-lg-7">
              <div className="widget nueva_entrada">
                <h3 className="titulo">{title_form}</h3>
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    

  )
}

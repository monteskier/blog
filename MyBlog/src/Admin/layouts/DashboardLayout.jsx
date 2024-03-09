import { AsideApp, NavBarApp } from "../components"

export const DashboardLayout = ({children, title='', options={posts:null}}) => {
  return (
    <>
    
    <header>
      <NavBarApp></NavBarApp>
    </header>
    <main>
      <div className="container-fluid">
        <div className="row">
          <AsideApp options={options}></AsideApp>
          <div className="main col">
            <div className="row">
              <div className="columna col-12 col-lg-7">
                <div className="widget nueva_entrada">
                  <h3 className="titulo">{title}</h3>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>

    

  )
}

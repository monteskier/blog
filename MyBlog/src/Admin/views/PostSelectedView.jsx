import {PostForms} from '../components/index'

export const PostSelectedView = () => {
  return (
    <div>
      <h4>Entradas</h4>
      <div className="row">
        <div className="col-12">				
          <div className="d-flex gap-2 justify-content-end mb-3">
            <button className="btn btn-primary" type="button">Guardar</button>
            <button className="btn btn-danger" type="button">Eliminar</button>
          </div>
        </div>

      </div>
      <PostForms></PostForms>
    </div>
  )
}

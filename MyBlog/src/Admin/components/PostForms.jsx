import {useDispatch, useSelector} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';


export const PostForms = ({categories}=[]) => {
const { active } = useSelector(state => state.blog);
const { title, id, description, date, img, category, featured, formState, onInputChange, setFeatured  } = useForm(active);

console.log(typeof(featured));
  return (
    <form action="" className="nueva_entrada animate__animated animate__fadeIn">
      <h3>{id}</h3>
      <div className="row">
        <div className="col-12">				
          <div className="d-flex gap-2 justify-content-end mb-3">
            <button className="btn btn-primary" type="button">Guardar</button>
            <button className="btn btn-danger" type="button">Eliminar</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-floating mb-3">
            <input type="text" value={title} className="form-control" id="title" name="title" onChange={onInputChange} placeholder="Titulo de la entrada" />
            <label  htmlFor="title">Titulo</label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select" onChange={onInputChange} name="category" id="category" placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab!">
              {categories.map( cat =>{
                return(
                  
                  <option key={cat.id} value={cat.id} defaultValue={category === cat.id}>{cat.title}</option>
                );
              })}
            </select>
            <label  htmlFor="category">Categoria</label>
          </div>
          <div className="form-floating mb-3">
            <textarea onChange={onInputChange} value={description} className="form-control" id="description" name="description" placeholder="Contenido de la entrada" />
            <label  htmlFor="description">Contenido</label>
          </div>
          <div className="form-check form-switch mb-3">
            <label htmlFor="featured" className="form-check-label">Destacado</label>
            <input type="checkbox" name="featured" id="featured" checked={featured} onChange={setFeatured} className="form-check-input"  />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>   	Enviar
          </button>
        </div>
      </div>
    </form>
  )
}

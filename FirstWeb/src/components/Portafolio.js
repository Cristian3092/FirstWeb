import React from 'react'
import { trabajos } from '../data/trabajos.js'

export const Portafolio = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Portafolio</h1>

        {
          trabajos.map(trabajos=>{
            return(  
            <article key={trabajos.id} className='work-item'>
              <span>{trabajos.categorias}</span>
              <h2>{trabajos.nombre}</h2>
              <h3>{trabajos.tecnologias}</h3>
            </article>)
          
          })
        }
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='inicio'>

      <h1>Hola, me llamo Bogdan Cristian Muresan, soy nuevo en este mundo de la programacion.
      Empece hace 5 meses y cada vez he ido enganchandome mas a esto, es un locura.
      <strong>Front-end Developer.</strong>
      </h1>
    
      <h2>
        Si necesitas mis servicio unicamente contactame, estare encantado de aprende y ayudarte en lo que pueda.
        <Link to ="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'/>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos
          <Link to ="/portafolio">Echa un vistazo</Link>
        </p>
        <div className='works'>

        </div>
    </div>
  )
}

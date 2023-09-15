import React from 'react'

export const Contacto = () => {
  return (
    <div>
      <h1 className='heading'>Contacto</h1>

        <form className='contact'action='mailto:easyroad4@gmail.com'>
          <input type='text' placeholder='Nombre'/>
          <input type='text' placeholder='Apellido'/>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Motivo del contacto'/>
          <input type='submit' value="Enviar"/>
        </form>
    </div>
  )
}

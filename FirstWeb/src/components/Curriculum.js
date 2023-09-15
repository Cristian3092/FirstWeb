import React from 'react'
import { ExperienciaLaboral } from './datos-personales/ExperienciaLaboral'
import { Estudios } from './datos-personales/Estudios'

export const Curriculum = () => {
  return (
    <div>
      <h1 className='heading'>Curriculum</h1>
        <ul><ExperienciaLaboral/></ul>
        <ul><Estudios/></ul>
    </div>
  )
}

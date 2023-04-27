import {useState} from 'react'
import styled from '@emotion/styled'



const Campo=styled.div `
  margin-bottom: .8rem;

  label {
    display: block;
    padding: .5rem 0;
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
  option {

  }
  select {
    display: block;
    border: none;
    width:100%;
    padding: .8rem 1rem;
    background-color: var(--blanco);
    border-radius: 7px;
    text-align: center;

  }

`

function useSelectMonedas( label, opciones) {
  
  const [state, setState]= useState('')
  

  const SelectMonedas=()=>
  (
    <>

      <Campo>

        <label>{label}</label>

        <select 
          value={state}
          onChange={(e)=>setState(e.target.value)}
        >
          <option value='' >--seleccione--</option>  
          

          {opciones.map(opcion=>(
            <option 
             key={opcion.id ? opcion.id: opcion.ISO} 
             value={ opcion.ISO }>

              {opcion.nombre} 
             
            </option>

          ))}   

        </select>

      </Campo>
    
    
    </>

  )
  return [state, SelectMonedas]
}

export default useSelectMonedas

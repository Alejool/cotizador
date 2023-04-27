import React from 'react'
import styled from '@emotion/styled'

// components
import Form from './Form'
import Resultado from './Resultado'
import Spinner from './Spinner'

// img
import cripto from '/img/4.avif'

const ContainerG=styled.div `
max-width:60rem;
  width: 90%;
  margin:0 auto;
  color: var(--blanco);`

const Contenedor=styled.div `
  
  
  @media (min-width: 768px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    align-items: center;
  }
`

const Columna=styled.div `

`
const Subtitle= styled.h2 `
  margin-top: 0;
  text-align: center;
  color: var(--gris);
  font-size: 1.7rem;
  margin-bottom: 3rem;

  &:after {
    content: '';
    display: block;
    width: 6rem;
    height: 5px;
    background-color: var(--rojo);
    margin: 0 auto;
  }

`

const Imagen= styled.img `
  @media (min-width: 768px){
    margin: 0 0 0 auto;
  }
`


function Cotizar({
    monedas, 
    setMonedas,
    error, 
    setError, 
    resultado,
    spinner,
    mensaje,
    setMensaje}) {
  return (
    <>
      <ContainerG>
          <Contenedor>
            <Columna> 
            <Imagen src={cripto} alt='imagen cripto'/>
            </Columna>

            <Columna> 

              <Subtitle>Cotiza aqui</Subtitle>
              <Form
                setMonedas={setMonedas}
                error={error}
                setError={setError}
                mensaje={mensaje}
                setMensaje={setMensaje}/>

            </Columna>
          </Contenedor>

          {spinner && <Spinner/>}

          {Object.keys(monedas).length>0 && !error && !spinner && <Resultado
                      monedas={monedas}
                      resultado={resultado}/>}

      </ContainerG>
    

     
    </>
  )
}

export default Cotizar

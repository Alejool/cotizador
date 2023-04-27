import React from 'react'
import styled from '@emotion/styled'

// components
import Form from './Form'
import Resultado from './Resultado'

// img
import cripto from '/img/4.1.png'

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


function Cotizar({monedas, setMonedas,error, setError, resultado}) {
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
                setError={setError}/>

            </Columna>
          </Contenedor>

          {Object.keys(monedas).length>0 && <Resultado
                      monedas={monedas}
                      resultado={resultado}/>}

      </ContainerG>
    

     
    </>
  )
}

export default Cotizar

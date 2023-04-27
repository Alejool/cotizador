import React, { useEffect } from 'react'
import styled from '@emotion/styled'


const Cotizado=styled.div `
  margin:  0 auto;
  margin-top: 4rem;
  
  font-size: 1.2rem;


  @media (min-width: 768px){
    text-align:right ;
    margin-top: -4rem;

     
  }
 



  p {
    font-weight: bold;
  }

  span {
    font-weight: normal;
    color: var(--gris);
  }

`

const Precio=styled.p `
  font-size: 1.2rem;
  text-transform: uppercase;
`

const Texto=styled.p `
 color: var(--morado);
  text-transform: normal;
  font-size: 1rem;

`

function Resultado({monedas, resultado}) {

  const {PRICE,LASTUPDATE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL}= resultado;
  const {moneda, criptos}=monedas;

 
  return (
    <>
      <Cotizado>

        <div>
          <Precio>Precio: <span>{PRICE}</span></Precio>
          <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
          <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
          <Texto>Ultimas 24 horas (variación): <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Última actualización: <span>{ LASTUPDATE}</span></Texto>
        </div>


      </Cotizado>
     
      
    </>
  )
}

export default Resultado

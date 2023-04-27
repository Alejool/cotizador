import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

// libreria de id
import { v4 as uuidv4 } from 'uuid';





const Button=styled.input `
  display: block;
  color: var(--blanco);
  width: 100%;
  padding: .8rem ;
  border: none;
  background-color: var(--morado);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  transition: background-color .3s ease;

  &:hover {
    background-color: var(--morado-oscuro);
    cursor: pointer;
  }
`

export default function Form({setMonedas, error, setError, mensaje, setMensaje}) {


    // states
    const [cripto, setCripto]=useState([])
    
    const [datosMonedas, setDatosMonedas]=useState([])
    


    // ho0kks de campos
    const [moneda, SelectMonedas]=useSelectMonedas('elige tu moneda',  datosMonedas);
    const [criptos, SelectCripto]=useSelectMonedas('elige tu criptomoneda', cripto);
   
    

  // api de paises y moneda
  useEffect(()=>{
    const url='https://restcountries.com/v3.1/lang/spanish'

    const respuestaApi=async()=>{

      const respuesta= await fetch(url)
      const resultado=await respuesta.json();

      const arrayPais=resultado.map(pais=>{

        const currency=pais.currencies
        const nombreMoneda=Object.keys(currency)[0]
        

        const obj={
          ISO:Object.keys(currency)[0],
          id:uuidv4(),
          nombre:currency[nombreMoneda].name
        }
       
        return obj;

      })
      setDatosMonedas(arrayPais)

     
    }

    respuestaApi()
  },[])

  // api de criptomonedas
  useEffect(()=>{
    const url="https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=15&tsym=USD"

    const respuestaApi= async()=>{
      
      const respuesta=await fetch(url)
      const resultado=await respuesta.json();
      const arrayCripto= resultado.Data.map(cripto=>{

        const objeto={
          ISO:cripto.CoinInfo.Name,
          nombre:cripto.CoinInfo.FullName,
         
        }
        return objeto;
      })

      setCripto(arrayCripto)
    
    }
    
    respuestaApi();
  },[])


  // funciones

  const handleSubmit=e=>{

    e.preventDefault();
    if([moneda, criptos].includes('')){
      setError(true)
      setMensaje('todos los campos son obligatorios')
      
      return;
    }

    setError(false)

    const obj={
      moneda,
      criptos
    }

    
    setMonedas(obj)
  }




  return (
    <>
      <form 
        onSubmit={handleSubmit}
      >

       
        {error &&   <Error
                    mensaje={mensaje}
                    tipo={'error'}
                    />}
        <SelectMonedas/>
        <SelectCripto/>

        

        <Button
          type='submit'
          value='Cotizar criptomoneda'
        />
           
      </form> 

    

     
      
  </>
  )
}

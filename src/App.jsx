import { useState, useEffect } from 'react'
import Heading from './components/Heading'
import Cotizar from './components/Cotizar'






function App() {
  
  const [error, setError]=useState(false)
  const [monedas, setMonedas]=useState({})
  const [resultado, setResultado]=useState({})
  const [spinner, setSpinner]=useState(false)
  const [mensaje, setMensaje]=useState('')
  

  useEffect(()=>{
    setError(false)

    if(Object.keys(monedas).length>0){

      const {moneda, criptos}=monedas;
      const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptos}&tsyms=${moneda}`

   
    
     const cotizarCripto=async()=>{
      setSpinner(true)

      
      const respuesta=await fetch(url)
      const resultado=await respuesta.json();

      if(resultado.Response==='Error'){
        setError(true)

        setMensaje('la api no maneja esta moneda');
        setSpinner(false)
        return;
      }

     setResultado(resultado.DISPLAY[criptos][moneda])
    

     setSpinner(false)
        
     
    }
    
    cotizarCripto();

    }
  },[monedas])

  return (
    <>
      <Heading/>
      <Cotizar
        monedas={monedas}
        setMonedas={setMonedas}
        error={error}
        setError={setError}
        resultado={resultado}
        spinner={spinner}
        mensaje={mensaje}
        setMensaje={setMensaje}
        />

    
    </>
  )
}

export default App

import React from 'react'
import styled from '@emotion/styled'




function Error({mensaje, tipo}) {
  return (
    <>
      <div className={`alerta ${tipo}`}>{mensaje}</div>
    </>
  )
}

export default Error

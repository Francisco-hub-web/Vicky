import React from 'react'
import LayoutPrincipal from '../components/LayoutPrincipal'
import styled from '@emotion/styled'


const GridPrincipal = styled.div`
  display: grid;
  width: auto;
  height: 1000px;
  border-radius: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 1500px;
  max-height: 1000px;
  grid-gap: 10px;
  @media (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px){
    grid-template-columns: repeat(3, 1fr);
  }

`
const index = () => {
  return (
    <LayoutPrincipal>
      <GridPrincipal>
        <div className= "Numero1" style = {{backgroundColor: 'red'}}> Primero</div>
        <div className= "Numero2" style = {{backgroundColor: 'blue'}} > Segundo </div>
        <div className= "Numero3" style = {{backgroundColor: 'green'}}> Tercero </div>
        <div className= "Numero4"style = {{backgroundColor: 'yellow'}}> cuarto </div>
        <div className= "Numero5"style = {{backgroundColor: 'orange'}}> quinto </div>
        <div className= "Numero6"style = {{backgroundColor: 'black'}}> sexto </div>
        <div className= "Numero7"style = {{backgroundColor: 'grey'}}> SEPTIMO </div>
        <div className= "Numero8"style = {{backgroundColor: 'pink'}}> OCTAVO </div>
        <div className= "Numero9"style = {{backgroundColor: 'brown'}}> NOVENO </div>
        <div className= "Numero10"style = {{backgroundColor: 'purple'}}> DECIMO </div>
        <div className= "Numero11"style = {{backgroundColor: 'turquoise'}}> DECIMO PRIMERO </div>
      </GridPrincipal>
    </LayoutPrincipal>
  )
}

export default index

import React from 'react'
import styled from 'styled-components'
import { Rating, RoundedButton } from '../../components'

const InfoComponent = () => {
  return (
    <Info>
      <InfoDetails>
        <Title1>GAME OF THRONES</Title1>
        <span>
          <Title2>2020</Title2>
          <Title2>6ª TEMP</Title2>
          <Rating />
        </span>
        <span>
          <RoundedButton>ASSISTIR</RoundedButton>
          <RoundedButton>ADICIONAR A LISTA</RoundedButton>
        </span>
      </InfoDetails>
    </Info>
  )
}

const Info = styled.div`
  display: flex;
  width: 100vw;
  height: 85vh;
  justify-content: center;
  align-items: center;
`

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  span {
    display: flex;
    margin: 15px 0;
    align-items: center;
  }
`

const Title1 = styled.h1`
  font-size: 3.9vw;
  color: white;
`

const Title2 = styled.h2`
  font-size: 1em;
  color: white;
  padding-right: 1.5vw;
`
export default InfoComponent

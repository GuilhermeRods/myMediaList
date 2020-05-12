import React from 'react'
import { Menu, RoundedButton, Line, Rating } from '../../components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Content>
      <Slider>
        <Shadow>
          <Menu />
          <Line />
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
        </Shadow>
      </Slider>
    </Content>
  )
}

const Content = styled.div``

const Slider = styled.div`
  height: 100vh;
  background-image: url(https://i.pinimg.com/originals/03/94/b1/0394b1a6a5315cdc20f651af9ecd22ca.jpg);
  background-size: cover;
`

const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(6, 11, 26, 0.75);
`
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

export default Home

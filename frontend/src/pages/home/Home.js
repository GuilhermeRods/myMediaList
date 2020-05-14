import React from 'react'
import { Menu, Line, Info, MediaSlider, SecondaryMenu } from '../../components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Content>
      <Slider>
        <Shadow>
          <Menu />
          <Line />
          <Info />
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

export default Home

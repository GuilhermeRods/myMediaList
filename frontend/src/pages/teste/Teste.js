import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HomeSlider, Menu } from '../../components'

const HomeSliderComponent = () => {
  return (
    <Content>
      <HomeSlider />
      <Shadow />
      <Menu />
    </Content>
  )
}

const Content = styled.div``

const Shadow = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(6, 11, 26, 0.75);
`

export default HomeSliderComponent

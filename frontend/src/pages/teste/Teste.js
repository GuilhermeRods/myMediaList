import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Menu } from '../../components'

const HomeSliderComponent = () => {
  return (
    <Content>
      <Menu></Menu>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: blueviolet;
`

export default HomeSliderComponent

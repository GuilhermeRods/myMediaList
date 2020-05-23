import React from 'react'
import { Menu, Line, HomeSlider } from '../../components'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContent>
      <HomeSlider />
      <MenuBar>
        <Menu />
        <Line />
      </MenuBar>
    </HomeContent>
  )
}

const HomeContent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const MenuBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  flex-direction: column;
  justify-content: center;
`

export default Home

import React from 'react'
import './style.css'
import styled from 'styled-components'
import { SecondaryMenu } from '../../components/index'

const Teste = () => {
  return (
    <Content>
      <SecondaryMenu />
    </Content>
  )
}

export default Teste

const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 20, 20);
  justify-content: center;
  flex-direction: column;
`

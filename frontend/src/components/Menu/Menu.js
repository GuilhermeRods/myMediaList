import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

const MenuComponet = () => (
  <Content>
    <Menu>
      <Logo>
        <Items>LOGO</Items>
      </Logo>
      <MenuItems>
        <Items>FILMES</Items>
        <Items>SERIES</Items>
        <Items>ANIMES</Items>
      </MenuItems>
      <Login>
        <Items>
          <Icon.LogIn />
        </Items>
      </Login>
    </Menu>
  </Content>
)

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Menu = styled.div`
  display: flex;
  height: 5vh;
  align-items: center;
  padding: 25px 0;
  color: aliceblue;
`

const Logo = styled.div`
  width: 25vw;
  padding-left: 5vw;
`

const MenuItems = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-between;
`

const Login = styled.div`
  display: flex;
  width: 25vw;
  padding-right: 5vw;
  justify-content: flex-end;
`

const Items = styled.p`
  cursor: pointer;
  letter-spacing: 1.5px;
  :hover {
    transition: 0.5s;
    text-shadow: 0px 0px 10px #fff;
  }
`

export default MenuComponet

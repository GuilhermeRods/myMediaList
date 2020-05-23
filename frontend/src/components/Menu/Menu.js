import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

const MenuComponet = () => (
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
)

const Menu = styled.div`
  display: flex;
  height: 5vh;
  align-items: center;
  padding: 25px 0;
  color: rgba(255, 255, 255, 0.5);
`

const Logo = styled.div`
  display: flex;
  width: 25vw;
  padding-left: 5vw;
  justify-content: flex-start;
`

const MenuItems = styled.div`
  display: flex;
  width: 30vw;
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
  margin: 0px 5px;
  :hover {
    transition: 0.5s;
    color: rgba(255, 255, 255);
  }
`

export default MenuComponet

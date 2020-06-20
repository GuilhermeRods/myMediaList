import React from 'react'
import styled from 'styled-components'

let itemsName = ['LANÇAMENTOS', 'NOVOS EPISODIOS', 'MELHORES AVALIAÇÕES', 'MAIS ASSISTIDOS']

const SecondaryMenuComponent = () => (
  <Content>
    <MenuItems>
      {itemsName.map((i, index) => (
        <Items href='#'>{itemsName[index]}</Items>
      ))}
    </MenuItems>
  </Content>
)

const Content = styled.div`
  background-color: #050915;
`

const Items = styled.a`
  cursor: pointer;
  position: relative;
  letter-spacing: 1.5px;
  padding: 25px 0;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 14px;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    -webkit-transform: translateX(-50%) scaleX(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 0 50%;
    width: 100%;
    height: 3px;
    background-color: #dc1436;
    -webkit-transition: transform 250ms;
    transition: transform 250ms;
  }

  &:hover::after {
    -webkit-transform: translateX(-50%) scaleX(1);
    transform: translateX(-50%) scaleX(1);
  }

  :hover {
    transition: 0.5s;
    color: rgba(255, 255, 255);
  }
`

const MenuItems = styled.div`
  color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: auto;
`

export default SecondaryMenuComponent

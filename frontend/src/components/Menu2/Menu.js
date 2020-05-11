
import React from 'react'
import styled from 'styled-components'


function MenuComponet() {
  
    return (

        <Container>
          <Menu>
            <MenuItem><Item  href="#">SERIES</Item></MenuItem>
            <MenuItem><Item  href="#">FILMES</Item></MenuItem>
            <MenuItem><Item  href="#">ANIMES</Item></MenuItem>
            <Line/>
          </Menu>
        </Container>

    );
}

const Container = styled.div`

display: flex;
justify-content: center;
position:relative;

`

const Menu = styled.ul`

list-style: none;
margin: 0;
padding: 0;
position: absolute;

`

const MenuItem = styled.li`

display: inline-flex;
align-items: space-beetwen;

`

const Item = styled.a`

position: relative;
padding: 16px 0 20px;
margin: 0 5vw;
color: #FFF;
text-decoration: none;
font-size: 1em;

&:after{

  content: '';
  position: absolute;
  left:50%;
  bottom: 0;
  transform: translateX(-50%) scaleX(0);
  -webkit-transform: translateX(-50%) scaleX(0);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 0 50%;
  width: 100%;
  height: 3px;
  background-color: #DC1436;
  -webkit-transition: transform 250ms;
  transition: transform 250ms;

}

&:hover::after{

  -webkit-transform: translateX(-50%) scaleX(1);
  transform: translateX(-50%) scaleX(1);

}
`

const Line = styled.div`
    position: relative;
    height:1px;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.5816701680672269) 50%, rgba(0,0,0,0) 100%);
    margin-top: 50px;
    
`

export default MenuComponet;
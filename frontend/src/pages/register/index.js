import React from 'react'

import { Button, Input }from '../../components'
import styled from 'styled-components'

const Register = () => {
  const handleRegister = () => {}

  return (
    <RegisterConteiner>
      <Row>
        <Title>BEM-VINDO AO MYMEDIALIST</Title>
        <Paragraph>Aqui você pode assistir e gerenciar as series, filmes e animes criando uma lista na qual acompanha o episodio que você se encontra, o que você concluiu e o que pretende assistir.</Paragraph>
      </Row>
      <Content>
        <SubTitle>
          REGISTRAR
        </SubTitle>
        <form onSubmit={handleRegister}>
          <Input name='email' placeholder='EMAIL' type='email'/>
          <Input name='name' placeholder='NOME' />
          <Input  name='password' placeholder='SENHA' />
          <Input name='repeatPassword' placeholder='REPITA A SENHA' />
          <Button width='biggest' primary height='regular'>REGISTRAR CONTA</Button>
          <Button width='biggest' height='regular'>LOGIN</Button>
        </form>
      </Content>
    </RegisterConteiner>
  )
}

const RegisterConteiner = styled.div`
  background-color: rgba(1,1,19,0.9);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
height: 480px;
width: 500px;
`
const Row = styled.div`
`

const SubTitle = styled.h2`
height: 47px;
width: 162px;
color: #F2F2F2;
font-family: 'Roboto';
font-size: 25px;
font-weight: 700;
line-height: 35px;
font-weight: bold;
`

const Title = styled.h1`
  height: 61px;
  width: 657px;
  color: #F2F2F2;
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
`
const Paragraph = styled.p`
  height: 360.48px;
  width: 657px;
  color: #F2F2F2;
  font-size: 20px;
  font-style: italic;
  line-height: 29px;
`




export default Register

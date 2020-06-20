import React, { useState } from 'react'

import { Button, Input } from '../../components'
import styled from 'styled-components'

const Register = () => {
  const handleRegister = () => {}
  const handleLogin = () => {}

  const [isRegister, setIsRegister] = useState(false)

  return (
    <RegisterConteiner>
      <RegisterForm>
        {isRegister ? (
          <form onSubmit={handleRegister}>
            <SubTitle>REGISTRAR</SubTitle>
            <Input name='email' placeholder='EMAIL' type='email' />
            <Input name='name' placeholder='NOME' />
            <Input name='password' placeholder='SENHA' />
            <Input name='repeatPassword' placeholder='REPITA A SENHA' />
            <Button
              width='large'
              primary
              height='large'
              borderRadius='regular'
              marginSize='10px 0px 0px'
            >
              REGISTRAR CONTA
            </Button>
            <Button
              backgroundColor='none'
              type='button'
              width='large'
              height='large'
              borderRadius='regular'
              marginSize='10px 0px 0px'
              onClick={() => setIsRegister(false)}
            >
              LOGIN
            </Button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <SubTitle>LOGAR</SubTitle>
            <Input name='login' placeholder='LOGIN' />
            <Input name='senha' placeholder='SENHA' />
            <Button
              width='large'
              primary
              height='large'
              borderRadius='regular'
              marginSize='10px 0px 0px'
            >
              LOGAR
            </Button>
            <Button
              backgroundColor='none'
              primary
              width='large'
              height='small'
              boxShadow='none'
              marginSize='10px 0px 0px'
            >
              Esqueci minha senha
            </Button>
            <Button
              width='large'
              primary
              height='large'
              borderRadius='regular'
              marginSize='10px 0px 0px'
              backgroundColor='#184573'
              boxShadow='none'
            >
              LOGAR COM FACEBOOK
            </Button>
            <Button
              backgroundColor='none'
              type='button'
              width='large'
              height='large'
              borderRadius='regular'
              marginSize='10px 0px 0px'
              onClick={() => setIsRegister(true)}
            >
              REGISTRAR
            </Button>
          </form>
        )}
      </RegisterForm>
    </RegisterConteiner>
  )
}

const RegisterConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(6, 11, 26, 0.9);
  align-items: center;
  justify-content: center;
`
const RegisterForm = styled.div`
  width: 30%;
  height: 300px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const SubTitle = styled.h2`
  color: #f2f2f2;
`

export default Register

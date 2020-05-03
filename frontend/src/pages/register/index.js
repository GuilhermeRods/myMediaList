import React from 'react'

import './styles.css'

import { Button, Input } from '../../global'

const Register = () => {
  const handleRegister = () => {}

  return (
    <div className='registerContainer'>
      <div className='contentWelcome'>
        <h1>BEM-VINDO AO MYMEDIALIST</h1>
        <p>Aqui você pode assistir e gerenciar as series, filmes e animes criando uma lista na qual acompanha o episodio que você se encontra, o que você concluiu e o que pretende assistir.</p>
      </div>
      <div className='content'>
        <section>
          <h2>REGISTRAR</h2>
        </section>
        <form onSubmit={handleRegister}>
          <Input type='email' placeholder='EMAIL' />
          <Input placeholder='NOME' />
          <Input placeholder='SENHA' />
          <Input placeholder='REPITA A SENHA' />
          <Button primary>REGISTRAR CONTA</Button>
          <Button>LOGIN</Button>
        </form>
      </div>
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import { Register } from '../../pages'
import styled from 'styled-components'
import { Button, Modal } from '../../components'

const Login = () => {
  const [isModelVisible, setIsModelVisible] = useState(false)
  return (
    <Container>
      <Button primary width='big' height='regular' onClick={() => setIsModelVisible(true)}>
        CADASTRE-SE AQUI{' '}
      </Button>
      {isModelVisible ? (
        <Modal onClose={() => setIsModelVisible(false)}>
          <Register />
        </Modal>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`

export default Login

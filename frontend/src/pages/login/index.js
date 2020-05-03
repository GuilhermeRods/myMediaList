import React, { useState } from 'react'

import Modal from '../modal'

import './styles.css'
import Register from '../register'

import { Button } from '../../global'

const Home = () => {
  const [isModelVisible, setIsModelVisible] = useState(false)
  return (

    <div className='container'>
      <Button primary onClick={() => setIsModelVisible(true)}>CADASTRE-SE AQUI </Button>
      <div className='content'>
        {isModelVisible ? <Modal onClose={() => setIsModelVisible(false)}><Register /></Modal> : null}
      </div>
    </div>

  )
}

export default Home

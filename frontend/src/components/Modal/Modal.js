import React from 'react'
import styled from 'styled-components'
import  CloseIcon from '../Icons/Close/Close'
import { Row } from '../Row'

const ModalComponent = ({ onClose = () => {}, children }) => {
  return (

    <Modal>
      <Row>
        <CloseIcon color='#808080' onClick={onClose} right='5vw' top='5vh' size={30}/>
        {children}
      </Row>
    </Modal>

  )
}

const Modal = styled.div`
 width: 100%;
 height: 100vh;
 position: absolute;
 top: 0;
 left: 0;
`


export default ModalComponent

import React from 'react'

import { FaRegTimesCircle } from 'react-icons/fa'

import './styles.css'

const Modal = ({ onClose = () => {}, children }) => {
  return (
    <div className='modal'>
      <div className='container'>
        <FaRegTimesCircle className='close' onClick={onClose} size={30} color='#808080' />
        <div className='content' />
        {children}
      </div>
    </div>
  )
}

export default Modal

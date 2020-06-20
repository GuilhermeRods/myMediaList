import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

const CloseIcon = ({
  color,
  position = 'absolute',
  right,
  left,
  top,
  bottom,
  cursor = 'pointer',
  ...props
}) => {
  return <FaRegTimesCircle style={{ position, right, top, cursor }} color={color} {...props} />
}

export default CloseIcon

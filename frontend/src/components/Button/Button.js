import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const BIGGEST = 'biggest'
const BIG = 'big'
const REGULAR = 'regular'

const ButtonComponent = ({ type = 'submit', ...props }) => {
  return (
    <Button type={type}  {...props}></Button>
  )
}

const Button = styled.button`
width: ${({ width }) => {
  switch (width) {
    case BIGGEST:
      return '400px'
    case BIG:
      return '359px'
    case REGULAR:
      return '218px'
  }
}};
height: ${({ height }) => {
  switch (height) {
    case REGULAR:
    return '48px'
  }
}};
background: ${props => props.primary ? '#DC1436' : 'none'};
margin-top: ${props => props.primary ? '10px' : '5vh'};
font-size: 15px;
border-radius: 6px;
box-sizing: border-box;
border: ${props => props.primary ? 'none' : '3px solid #F2F2F2'};
color: #FFF;
cursor: pointer;
`

ButtonComponent.propTypes = {
  width: propTypes.oneOf([BIGGEST, BIG, REGULAR])
}

export default ButtonComponent

import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const LARGE = 'large'
const MEDIUM = 'medium'
const SMALL = 'small'

const ROUNDED = 'rounded'
const ROUND = 'round'
const REGULAR = 'regular'

const ButtonComponent = ({ type = 'submit', ...props }) => {
  return <Button type={type} {...props}></Button>
}

const Button = styled.button`
  width: ${({ width }) => {
    switch (width) {
      case LARGE:
        return '30vw'
      case MEDIUM:
        return '15vw'
      case SMALL:
        return '30px'
      default:
    }
  }};

  height: ${({ height }) => {
    switch (height) {
      case LARGE:
        return '48px'
      case MEDIUM:
        return '32px'
      case SMALL:
        return '30px'
      default:
    }
  }};

  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case LARGE:
        return '16px'
      case MEDIUM:
        return '13px'
      case SMALL:
        return '8px'
      default:
    }
  }};

  border-radius: ${({ borderRadius }) => {
    switch (borderRadius) {
      case ROUND:
        return '100px'
      case ROUNDED:
        return '32px'
      case REGULAR:
        return '4px'
      default:
    }
  }};

  margin: ${(props) => props.marginSize};
  background: ${(props) => (props.primary ? '#DC1436' : 'none')};
  border: ${(props) => (props.primary ? 'none' : '3px solid #F2F2F2')};
  color: #fff;
  box-sizing: border-box;

  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 30px #dc1436, 0px 0px 0px rgba(220, 20, 54, 50);
    transition: 1s;
  }
`

ButtonComponent.propTypes = {
  width: propTypes.oneOf([LARGE, MEDIUM, SMALL])
}

export default ButtonComponent

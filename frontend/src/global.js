import styled from 'styled-components'

export const Button = styled.button`
background: ${props => props.primary ? '#DC1436' : 'none'};
margin-top: ${props => props.primary ? '10px' : '5vh'};
font-size: 15px;
width: 400px;
border-radius: 6px;
box-sizing: border-box;
border: ${props => props.primary ? 'none' : '3px solid #F2F2F2'};
height: 45px;
color: #FFF;
`

export const Input = styled.input`
height: 45px;
width: 400px;
border-radius: 6px;
background-color: #F2F2F2;
color: #BDBABA;
font-family: Roboto;
font-size: 15px;
font-weight: 700;
line-height: 23px;
text-align: center;
border-radius: 6px;
margin-top: 10px;
border: none;
`

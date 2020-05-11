
import React from 'react'
import styled from 'styled-components'

const RoundedButtonComponent = () => {
    return (
        <RoundedButton/>
    )
}

const RoundedButton = styled.button`
    
    display: flex;
    font-size: 0.9em;
    background-color: #DC1436;
    border: none;
    border-radius: 50px;
    color: white;
    box-shadow: 0 0 30px #DC1436,  0px 0px 0px rgba(220,20,54,50);
    padding: 10px 1.7vw;
    text-align: center;
    margin-right: 1vw;
    cursor: pointer;
    align-items: center;

`
export default RoundedButton;
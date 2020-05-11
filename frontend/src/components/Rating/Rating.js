import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather';

const RatingComponent = () => {
    return(
        <Rating>
            <Icon.Star size ='18px'color='white'/>
            <Icon.Star size ='18px'color='white'/>
            <Icon.Star size ='18px'color='white'/>
            <Icon.Star size ='18px'color='white'/>
            <Icon.Star size ='18px'color='rgba(255, 255, 255, 0.5)'/>
        </Rating>
    )
}

const Rating = styled.div`
    
`

export default RatingComponent;

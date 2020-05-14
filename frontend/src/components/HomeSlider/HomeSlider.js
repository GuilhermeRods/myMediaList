import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import got from '../../assets/got.jpg'

const HomeSliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '60px'
  }

  return (
    <Content>
      <Slider {...settings}>
        <div>
          <Image src={got} />
        </div>
        <div>
          <Image src={got} />
        </div>
        <div>
          <Image src={got} />
        </div>
      </Slider>
    </Content>
  )
}

const Content = styled.div`
  width: 100%;
`

const Image = styled.img`
  background-size: cover;
  border-radius: 10px;
  width: 12em;
  height: 16em;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`

export default HomeSliderComponent

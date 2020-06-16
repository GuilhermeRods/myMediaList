import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import shingeki from '../../assets/shingeki.jpg'

const MediaSliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    arrows: false
  }

  const images = [
    {
      image: shingeki
    },
    {
      image: shingeki
    },
    {
      image: shingeki
    },
    {
      image: shingeki
    },
    {
      image: shingeki
    },
    {
      image: shingeki
    }
  ]

  return (
    <Content>
      <SliderShow>
        <TitleCategory>FILMES</TitleCategory>
        <Slider {...settings}>
          {images.map((i) => (
            <Card>
              <Overlap />
              <Image variant='top' src={i.image} />
            </Card>
          ))}
        </Slider>
      </SliderShow>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #050913;

  .slick-slide {
    width: 160px;
  }
`

const Card = styled.div`
  width: 150px;
  height: 200px;
  position: relative;
`

const Overlap = styled.div`
  position: absolute;
  width: 150px;
  height: 200px;
  border-radius: 8px;
  transition: 0.5s;
  :hover {
    background-color: #03060ed1;
  }
`

const Image = styled.img`
  background-size: cover;
  border-radius: 8px;
  width: 150px;
  height: 200px;
  text-align: center;
  cursor: pointer;
`

const SliderShow = styled.div`
  width: 60%;
`
const TitleCategory = styled.p`
  margin: 50px 0px 25px 10px;
  color: white;
`
export default MediaSliderComponent

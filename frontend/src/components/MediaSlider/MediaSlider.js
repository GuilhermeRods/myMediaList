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
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
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
            <div>
              <Image src={i.image} />
            </div>
          ))}
        </Slider>
      </SliderShow>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #050915;
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

const SliderShow = styled.div`
  width: 70%;
`
const TitleCategory = styled.p`
  margin: 50px 0px 25px 10px;
  color: white;
`
export default MediaSliderComponent

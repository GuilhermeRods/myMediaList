import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Rating, Button } from '../../components'
import { Plus } from 'react-feather'

const HomeSliderComponent = () => {
  const settings = {
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  }

  const Medias = [
    {
      image: 'https://wallpaperaccess.com/full/1338444.png',
      name: 'MOB PSYCO 100',
      year: '2020',
      season: '2'
    },
    {
      image:
        'https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1',
      name: 'DEMON SLAYER',
      year: '2020',
      season: '2'
    },
    {
      image:
        'https://p.ecopetit.cat/wpic/lpic/343-3431860_minimalist-haikyuu-desktop-wallpaper-hd.png',
      name: 'HAIKYUUUU!',
      year: '2021',
      season: '3'
    }
  ]

  return (
    <HomeSlider>
      <Slider {...settings}>
        {Medias.map((i) => (
          <div>
            <Info>
              <InfoDetails>
                <span>
                  <Title>{i.name}</Title>
                </span>
                <span>
                  <SubTitle>{i.year}</SubTitle>
                  <SubTitle>{i.season}ª TEMP</SubTitle>
                  <Rating />
                </span>
                <span>
                  <Button width='medium' primary height='medium' borderRadius='rounded'>
                    ASSISTIR
                  </Button>
                  <Button
                    width='small'
                    primary
                    height='small'
                    marginSize='0px 0px 0px 10px'
                    borderRadius='round'
                  >
                    <AddIcon />
                  </Button>
                </span>
              </InfoDetails>
            </Info>
            <Image src={i.image} />
          </div>
        ))}
      </Slider>
    </HomeSlider>
  )
}

const HomeSlider = styled.div`
  position: relative;
  overflow: hidden;
  justify-content: center;

  .slick-vertical .slick-slide {
    border: none;
  }
`

const Image = styled.img`
  background-size: cover center;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 800px;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(6, 11, 26, 0.9);
`

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    margin: 10px 0;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 3.9vw;
  color: white;
`

const SubTitle = styled.h2`
  font-size: 1em;
  color: white;
  padding-right: 1.5vw;
`

const AddIcon = styled(Plus)`
  width: 10px;
  height: 10px;
  stroke-width: 4px;
`

export default HomeSliderComponent

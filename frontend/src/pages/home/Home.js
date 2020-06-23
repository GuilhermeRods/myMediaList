import React from 'react'
import { Menu, Line, HomeSlider } from '../../components'
import styled from 'styled-components'
import { SecondaryMenu, Modal } from '../../components'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'

const Home = () => {
  const animesImg = [
    {
      name: 'BOKU NO HERO',
      category: 'Luta, Aventura',
      temp: '4',
      epi: '125',
      star: '8',
      img:
        'https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-05-28-20-03/DePtvD_U8AABBoa.jpg/EG11/resize/565x-1/quality/75/format/jpg'
    },
    {
      name: 'SHINGEKI NO KYOJIN',
      category: 'Luta, Aventura',
      temp: '4',
      epi: '125',
      star: '8',
      img: 'https://i.pinimg.com/originals/a5/f9/8a/a5f98a7d9f22ecb3dcb7d9b736c47f90.jpg'
    },
    {
      name: 'MOB PSYCHO 100',
      category: 'Luta, Aventura',
      temp: '4',
      epi: '125',
      star: '8',
      img:
        'https://img.elo7.com.br/product/zoom/1EC7F15/big-poster-do-anime-mob-psycho-100-tamanho-90x-0-cm-lo03-anime.jpg'
    },
    {
      name: 'KIMETSU NO YAIBA',
      category: 'Luta, Aventura',
      temp: '4',
      epi: '125',
      star: '8',
      img:
        'https://img.elo7.com.br/product/zoom/26A822C/big-poster-anime-demon-slayer-kimetsu-no-yaiba-lo12-90x60-cm-poster-anime.jpg'
    },
    {
      name: 'BAKI GLAPPER',
      category: 'Luta, Aventura',
      temp: '4',
      epi: '125',
      star: '8',
      img: 'https://livedoor.blogimg.jp/ponpokonwes/imgs/e/6/e6e2a8a8.jpg'
    },
    {
      name: 'DORORO',
      category: 'Luta, Aventura',
      temp: '4',
      epi: '125',
      star: '8',
      img: 'https://sucodemanga.com.br/wp-content/uploads/2019/01/dororo-poster-1.jpg'
    }
  ]

  const moviesImg = [
    {
      name: 'KIMI NI NA WA',
      category: 'Luta, Aventura',
      time: '2:30',
      star: '8',
      img: 'https://upload.wikimedia.org/wikipedia/pt/7/7f/Kimi-no-Na-wa-poster.jpg'
    },
    {
      name: 'PRINCESA KAGUYA',
      category: 'Luta, Aventura',
      time: '2:30',
      star: '8',
      img: 'https://br.web.img3.acsta.net/pictures/15/07/02/20/53/577027.jpg'
    },
    {
      name: 'CASTELO ANIMADO',
      category: 'Luta, Aventura',
      time: '2:30',
      star: '8',
      img: 'https://i.pinimg.com/originals/d7/26/4b/d7264b49f519fcd62a81e18bc30d5cb4.jpg'
    },
    {
      name: 'WEATHERING WITH YOU',
      category: 'Luta, Aventura',
      time: '2:30',
      star: '8',
      img: 'https://www.animenew.com.br/wp-content/uploads/2019/05/weathering-with-you.jpg'
    },
    {
      name: 'KOE NO KATACHI',
      category: 'Luta, Aventura',
      time: '2:30',
      star: '8',
      img: 'https://upload.wikimedia.org/wikipedia/pt/4/47/Koe-no-Katachi-poster-film.jpg'
    },
    {
      name: 'KIMETSU NO YAIBA',
      category: 'Luta, Aventura',
      time: '2:30',
      star: '8',
      img: 'https://sm.ign.com/ign_br/screenshot/default/kimetsu_6jp8.jpg'
    }
  ]

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    arrows: false,
    focusOnSelect: true,
    centerMode: true
  }

  const [isModelVisible, setIsModelVisible] = useState(false)

  return (
    <HomeContent>
      <Header>
        <HomeSlider />
        <MenuBar>
          <Menu />
          <Line />
        </MenuBar>
      </Header>
      <Section>
        <span>
          <SecondaryMenu />
          <SliderShow>
            <TitleCategory>ANIMES</TitleCategory>
            <Slider {...settings}>
              {animesImg.map((anime) => (
                <Card keyonClick={() => setIsModelVisible(true)}>
                  <Overlap>
                    <Info>
                      <InfoTitle>{anime.name}</InfoTitle>
                      <InfoCategory>{anime.category}</InfoCategory>
                      <InfoSeason>{anime.temp} Temp </InfoSeason>
                      <InfoDetails>
                        <p>{anime.epi} Episodes</p>
                        <p> {anime.star} ♥</p>
                      </InfoDetails>
                    </Info>
                  </Overlap>
                  <Image variant='top' src={anime.img} />
                </Card>
              ))}
            </Slider>
          </SliderShow>
          <SliderShow>
            <TitleCategory>FILMES</TitleCategory>
            <Slider {...settings}>
              {moviesImg.map((movie) => (
                <Card>
                  <Overlap>
                    <Info>
                      <InfoTitle>{movie.name}</InfoTitle>
                      <InfoCategory>{movie.category}</InfoCategory>
                      <InfoDetails>
                        <p>{movie.time} h </p>
                        <p> {movie.star} ♥</p>
                      </InfoDetails>
                    </Info>
                  </Overlap>
                  <Image variant='top' src={movie.img} />
                </Card>
              ))}
            </Slider>
          </SliderShow>
        </span>
        {isModelVisible ? <Modal onClose={() => setIsModelVisible(false)}></Modal> : null}
      </Section>
    </HomeContent>
  )
}

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const MenuBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Section = styled.div`
  height: 1200px;
  width: 100vw;
  background-color: #050913;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 100px;
    width: 70%;
    height: 1000px;
  }
`

const SliderShow = styled.div`
  width: 100%;
`

const TitleCategory = styled.p`
  margin: 50px 0px 25px 0px;
  color: white;
`

const Card = styled.div``

const Overlap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 150px;
  height: 100%;
  position: absolute;
  transition: 0.5s;
  color: rgba(255, 255, 255, 0);
  :hover {
    background-color: #050913d4;
    color: rgba(255, 255, 255, 1);
  }
`

const Info = styled.div`
  display: flex;
  min-width: 120px;
  flex-direction: column;
  padding: 20px 15px;
  align-content: flex-end;
`

const InfoTitle = styled.div`
  font-size: 15px;
`

const InfoCategory = styled.div`
  font-size: 10px;
`

const InfoSeason = styled.div`
  margin-top: 5px;
  font-size: 10px;
`

const InfoDetails = styled.div`
  margin-top: 5px;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
`

const Image = styled.img`
  background-size: cover;
  border-radius: 8px;
  width: 150px;
  height: 200px;
  text-align: center;
  cursor: pointer;
`

export default Home

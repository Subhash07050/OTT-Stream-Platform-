import React, { useRef } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero1 from '../../assets/HeroImg1.png';
import hero2 from '../../assets/HeroImg2.jpg';
import hero3 from '../../assets/HeroImg3.jpg';
import hero4 from '../../assets/HeroImg4.jpg';
import hero5 from '../../assets/HeroImg5.jpg';

import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const tvShowsRef = useRef(null);
  const moviesRef = useRef(null);
  const popularRef = useRef(null);

  const heroData = [
    {
      img: hero1,
      title: 'STRANGER THINGS',
      desc: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'
    },
    {
      img: hero2,
      title: 'MONEY HEIST',
      desc: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history.'
    },
    {
      img: hero3,
      title: 'REACHER',
      desc: 'Reacher travels to Maine in search of a deadly foe from his past and ends up entangled with rogue DEA agents and a mysterious family business.'
    },
    {
      img: hero4,
      title: 'THE WITCHER',
      desc: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world.'
    },
    {
      img: hero5,
      title: 'THE LION KING',
      desc: 'Tricked into thinking he killed his father, a guilt ridden lion cub flees into exile and abandons his identity as the future King.'
    }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='home'>
      <Navbar
        onScrollToTvShows={() => scrollToSection(tvShowsRef)}
        onScrollToMovies={() => scrollToSection(moviesRef)}
        onScrollToPopular={() => scrollToSection(popularRef)}
      />


      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero">
              <img className='hero_banner' src={item.img} alt={item.title} />
              <div className="hero-caption">
                <h1 className='hero-title'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className="hero-banner-btn">
                  <button className='btn'><img src={play_icon} alt="" />Play</button>
                  <button className='btn info-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="more-card">
        <div ref={popularRef}><TitleCards title={"Popular Shows"} /></div>
        <div ref={tvShowsRef}><TitleCards title={"TV Shows"} /></div>
        <div ref={moviesRef}><TitleCards title={"Movies"} /></div>
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Upcoming"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

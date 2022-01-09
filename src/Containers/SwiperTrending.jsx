import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//  Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import styled from 'styled-components';
// core modules
import SwiperCore, { EffectCube, Pagination } from 'swiper';
//  Swiper modules
SwiperCore.use([EffectCube, Pagination]);
//data Trending
import useTrendingPhotos from '../hooks/useTrendingPhotos';

const StyledTrending = styled.div`
  padding: 1rem;
  .swiper {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 204px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

const SwiperTrending = () => {
  const dataTrending = useTrendingPhotos();
  return (
    <StyledTrending>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        className="mySwiper"
      >
        {dataTrending.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                src={item.urls.regular}
                alt="itsdavdev giff trendign urls "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledTrending>
  );
};

export default SwiperTrending;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Data from './Data.json';

import { Card, CardBody, Image } from '@nextui-org/react';

function HeroCard({ data }) {
  return (
    <Card shadow="md">
      <CardBody className="overflow-visible ">
        <Image
          shadow="sm"
          radius="lg"
          alt={data.title}
          className="object-fill h-48  w-96 "
          src={data.path}
        />
      </CardBody>
    </Card>
  );
}

function HeroSectionSlider() {
  const swiperParams = {
    navigation: true,
    modules: [Navigation],
    breakpoints: {
      1024: {
        slidesPerView: 4, // Number of slides per view on screens with width >= 1024px
      },
      // Add more breakpoints as needed
    },
  };

  return (
    <div>
      <Swiper {...swiperParams} className="w-full">
        {Data.map((item, id) => (
          <SwiperSlide key={id} className="flex items-center justify-center mx-10 my-10">
            <HeroCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSectionSlider;

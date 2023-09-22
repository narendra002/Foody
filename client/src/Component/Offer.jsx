import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Data from "./Data.json"
import { Card, CardBody, Image } from '@nextui-org/react';
import Variety from './Variety';
import Restaurent from './Restaurent';

function HeroCard({ data }) {
  return (
    <Card shadow="md">
      <CardBody className="overflow-visible">
        <Image
          shadow="sm"
          radius="lg"
          alt={data.title}
          className="object-fit h-48 w-96"
          src={data.path}
        />
      </CardBody>
    </Card>
  );
}

export default function Offer() {

  const swiperParams = {
    navigation: true,
    modules: [Navigation],
    mousewheel: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">Best Offers For You</h1>
      <Swiper {...swiperParams} className="w-full">
        {Data.map((item, id) => (
          <SwiperSlide key={id} className="flex items-center justify-center mx-1 my-4 sm:my-6 lg:my-8">
            <HeroCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Variety/>
      <Restaurent/>
    </div>
  );
}

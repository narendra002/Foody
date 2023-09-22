import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Data from "./Data.json"
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

function HeroCard({ data }) {
  return (
    <Card shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
            //   width="100%"
              alt={data.name}
              className="w-full object-cover h-[140px] "
              src={data.path}
            />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <b>{data.name}</b>
            
          </CardFooter>
          </Card>
  );
}

export default function Variety() {

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
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">What's on your mind?</h1>
      <Swiper {...swiperParams} className="w-full">
        {Data.map((item, id) => (
          <SwiperSlide key={id} className="flex items-center justify-center mx-1 my-4 sm:my-6 lg:my-8">
            <HeroCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
  
    </div>
  );
}

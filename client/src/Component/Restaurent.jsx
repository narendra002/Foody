import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Data from "./Data.json"
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

function HeroCard({ data }) {
  
  return (
    <div className="p-2">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="h-full">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            alt={data.name}
            className="w-full object-cover h-[140px]"
            src={data.path}
          />
        </CardBody>
        <CardFooter className="text-small justify-center">
          <b>{data.name}</b>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Restaurant() {
    

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">What's on your mind?</h1>
     <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
        {Data.map((item, id) => (
          
            <HeroCard data={item} />
            
        
        ))}</div>
    
    </div>
  );
}

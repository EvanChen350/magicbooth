'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
} from '@/components/ui/carousel';
import { Scene01, Scene02, Scene03 } from '@/assets';
import Image from 'next/image';
import { Circle } from 'lucide-react';

const SLIDES = [Scene01, Scene02, Scene03];

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
      stopOnLastSnap: false,
    }),
  );

  const handleMouseEnter = React.useCallback(() => {
    plugin.current.stop();
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    plugin.current.play();
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
        align: 'center',
        dragFree: false,
      }}
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent>
        {SLIDES.map((slide, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-[776/722] items-center justify-center p-6 relative'>
                  <Image
                    src={slide}
                    alt={`Scene 0${index + 1}`}
                    className='object-cover opacity-80'
                    fill
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDotButton
        dotWrapperCls={'absolute bottom-0 right-0 flex justify-center items-center gap-3'}
        dotItemCls={'w-fit h-fit'}
      />
    </Carousel>
  );
};

export default CarouselPlugin;

import React from 'react';

import ImageUncles from '../assets/tios.jpg';
import Carousel from '../components/ui/Carousel';
import { index } from '../assets/home';

const Quote = () => {
  return (
    <section
      className={
        'box-border flex-shrink-0 w-full h-[300px] flex flow-row justify-center items-center mix-blend-luminosity min-h-[500px] overflow-hidden flex-1 relative content-center flex-nowrap gap-10'
      }
    >
      <Carousel images={index} altName={'fotomiranda home'} />
      {/* <img
        src={ImageUncles}
        alt={'fotoMiranda'}
        className={
          'box-border flex-shrink-0 w-full h-fit block overflow-hidden opacity-50 bg-cover bg-no-repeat bg-center absolute'
        }
      /> */}
      <h1
        className={
          'flex-shrink-0 flex-1 w-full h-auto whitespace-pre-wrap break-words max-w-[800px] z-10 absolute font-normal font-serif text-gray-500 text-[80px] tracking-normal leading-[1.1] text-center'
        }
      >
        Discover the world through our lens.
      </h1>
    </section>
  );
};

export default Quote;

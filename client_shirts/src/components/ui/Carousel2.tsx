import { useCallback, useEffect, useState } from 'react';

import NavigationButton from './NavigationButton';

type CarouselProps = {
  images: string[];
  altName: string;
  interval?: number;
};

const Carousel2 = ({ images, altName, interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length]);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideShowInterval);
  }, [currentIndex, images.length, interval]);

  const currentImage = images[currentIndex];

  return (
    <div className={'relative'}>
      <img
        src={currentImage}
        alt={altName}
        className={`z-10 h-full w-full object-cover pointer-events-none`}
      />

      <div
        className={
          'absolute inset-y-1/2 left-0 flex items-center justify-center w-12 md:w-16'
        }
      >
        <NavigationButton direction={'left'} onClick={handlePrevClick} />
      </div>

      <div
        className={
          'absolute inset-y-1/2 right-0 flex items-center justify-center w-12 md:w-16'
        }
      >
        <NavigationButton direction={'right'} onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Carousel2;

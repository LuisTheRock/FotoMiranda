import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';

import ImageComp from './ImageComp';

interface IImage {
  filename: string;
  data: string;
}

export interface IAlbumProfileInfo {
  images: IImage[];
  interval?: number;
}

const CarouselBackend = ({ images, interval = 9000 }: IAlbumProfileInfo) => {
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
    <div className={'relative flex justify-center'}>
      <img
        src={`data:image/png;base64,${currentImage.data}`}
        alt={currentImage.filename}
        className={'w-auto h-[600px] rounded-xl'}
      />
      <a
        onClick={handlePrevClick}
        className={
          'absolute h-full bg-black/20 rounded-l-xl left-0 flex items-center justify-center p-2 hover:bg-black/50'
        }
      >
        <ChevronLeftIcon
          className={'w-6 h-6 md:w-8 md:h-8 stroke-white stroke-2'}
        />
      </a>
      <a
        onClick={handleNextClick}
        className={
          'absolute h-full bg-black/20 rounded-r-xl right-0 flex items-center justify-center p-2 hover:bg-black/50'
        }
      >
        <ChevronRightIcon
          className={'w-6 h-6 md:w-8 md:h-8 stroke-white stroke-2'}
        />
      </a>
    </div>
  );
};

export default CarouselBackend;

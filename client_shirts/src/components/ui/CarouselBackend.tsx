import { useCallback, useEffect, useState } from 'react';

import ImageComp from './ImageComp';
import NavigationButton from './NavigationButton';

interface IImage {
  filename: string;
  data: string;
}

export interface IAlbumProfileInfo {
  images: IImage[];
  interval?: number;
}

const CarouselBackend = ({ images, interval = 5000 }: IAlbumProfileInfo) => {
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
    <div className={'relative py-3'}>
      <ImageComp
        src={`data:image/png;base64,${currentImage.data}`}
        alt={currentImage.filename}
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

export default CarouselBackend;

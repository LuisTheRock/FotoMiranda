import { useEffect, useState } from 'react';

type CarouselProps = {
  images: string[];
  altName: string;
  interval?: number;
};

const Carousel = ({
  images,
  altName,

  interval = 5000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideShowInterval);
  }, [currentIndex, images.length, interval]);

  const currentImage = images[currentIndex];

  return (
    <img
      src={currentImage}
      alt={`${altName} ${currentIndex}`}
      className={`box-border flex-shrink-0 w-full h-fit block overflow-hidden opacity-40 bg-cover bg-no-repeat bg-center absolute pointer-events-none`}
    />
  );
};

export default Carousel;

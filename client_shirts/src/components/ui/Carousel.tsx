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
    <div className={'overflow-hidden h-screen'}>
      <img
        src={currentImage}
        alt={`${altName} ${currentIndex}`}
        className={`object-cover brightness-50 w-full h-screen object-center pointer-events-none`}
      />
    </div>
  );
};

export default Carousel;

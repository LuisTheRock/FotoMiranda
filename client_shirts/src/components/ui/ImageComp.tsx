import { memo } from 'react';

type ImageProps = {
  src: string;
  alt: string;
  divProps?: string;
};

const ImageComp = memo(({ src, alt, divProps }: ImageProps) => (
  <div className={`overflow-hidden ${divProps}`}>
    <img
      src={src}
      alt={alt}
      className={`object-cover w-full h-full pointer-events-none`}
    />
  </div>
));

export default ImageComp;

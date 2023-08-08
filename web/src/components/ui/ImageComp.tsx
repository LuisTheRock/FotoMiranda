import { memo } from 'react';

type ImageProps = {
  src: string;
  alt: string;
  divProps?: string;
};

const ImageComp = memo(({ src, alt, divProps }: ImageProps) => (
  <img src={src} alt={alt} className={'w-auto h-[600px] rounded-xl'} />
));

export default ImageComp;

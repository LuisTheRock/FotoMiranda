import { useTranslation } from 'react-i18next';

import Carousel2 from '../../components/ui/Carousel2';

interface IShowPortfolio {
  bg_color: string;
  title: string;
  images: string[];
  altName: string;
}

const DisplayPortSection = ({ title, images, altName }: IShowPortfolio) => {
  const { t } = useTranslation();

  return (
    <section
      className={
        'md:h-screen h-full p-1 mt-10 md:p-0 top-0 rounded-xl md:flex justify-center md:sticky relative bg-zinc-50 dark:bg-zinc-800 select-none'
      }
    >
      <div className={'flex flex-col max-w-full content-center justify-center'}>
        <h1
          className={
            'relative mb-10 font-light font-Dosis dark:text-zinc-100 text-5xl tracking-normal leading-[1.2] text-center'
          }
        >
          {t(title)}
        </h1>
        <Carousel2 images={images} altName={altName} />
      </div>
    </section>
  );
};

export default DisplayPortSection;

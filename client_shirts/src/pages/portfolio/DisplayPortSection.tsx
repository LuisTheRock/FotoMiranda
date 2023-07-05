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
      className={`bg-[#fca311] dark:bg-zinc-900 flex h-screen md:sticky relative top-0 select-none`}
    >
      <div className={'flex flex-col max-w-full content-center justify-center'}>
        <h1
          className={
            'relative font-light font-Dosis dark:text-zinc-100 text-5xl tracking-normal leading-[1.2] text-center'
          }
        >
          {t(title)}
        </h1>
        <section className={'mt-5'}>
          <Carousel2 images={images} altName={altName} />
        </section>
      </div>
    </section>
  );
};

export default DisplayPortSection;

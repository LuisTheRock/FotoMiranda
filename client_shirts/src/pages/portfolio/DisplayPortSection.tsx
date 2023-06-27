import { t } from 'i18next';

import Carousel2 from '../../components/ui/Carousel2';
import { layout } from '../../style';

interface IShowPortfolio {
  bg_color: string;
  title: string;
  images: string[];
  altName: string;
}

const DisplayPortSection = ({
  title,
  bg_color,
  images,
  altName,
}: IShowPortfolio) => {
  return (
    <section
      className={`${bg_color} flex min-h-screen justify-center items-center md:sticky relative top-0 select-none`}
    >
      <div
        className={
          'flex-col md:pb-5 pb-20 flex w-full items-center justify-center'
        }
      >
        <h1
          className={
            'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-normal font-[Elsie] text-5xl tracking-normal leading-[1.2] text-center'
          }
        >
          {t(title)}
        </h1>
        <section className={'py-5'}>
          <div className={`${layout.gridStartEnd} shadow-xl shadow-black`}>
            <Carousel2 images={images} altName={altName} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default DisplayPortSection;

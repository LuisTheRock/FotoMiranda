import { t } from 'i18next';
import { indexWedding } from '../assets/portfolio/wedding/IndexWedding';
import Carousel2 from '../components/ui/Carousel2';

const ImagesDisplay = () => (
  <section
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-center md:p-24 px-5 py-[60px] overflow-hidden relative content-center flex-nowrap gap-[60px]'
    }
  >
    {/** Transform component */}
    <main
      className={
        'flex-shrink-0 w-full h-min flex md:flex-row flex-col justify-center items-center max-w-full overflow-hidden relative content-center flex-nowrap md:gap-[60px] gap-10'
      }
    >
      <div
        className={
          'flex-shrink-0 flex-1 w-full block overflow-hidden relative bg-cover bg-repeat bg-center md:rounded-[40px] rounded-[20px]'
        }
      >
        <Carousel2 images={indexWedding} altName={'fotoMiranda weeding'} />
      </div>

      <div
        className={
          'flex-shrink-0 flex-1 w-full h-min flex flex-col justify-center items-start overflow-hidden relative p-0 content-start flex-nowrap md:gap-[10px] gap-5'
        }
      >
        <h3
          className={
            'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-visible flex-1 relative font-normal font-serif text-[32px] tracking-normal leading-[1.2] text-left'
          }
        >
          {t('carouselSectionTitle')}
        </h3>
        <h3
          className={
            'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words max-w-[400px] overflow-visible flex-1 relative font-normal font-mono text-base tracking-normal leading-normal text-left'
          }
        >
          {t('carouselSectionBody')}
        </h3>
      </div>
    </main>
  </section>
);

export default ImagesDisplay;

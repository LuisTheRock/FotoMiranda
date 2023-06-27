import { t } from 'i18next';

import { index } from '../assets/home';
import Carousel from '../components/ui/Carousel';

const Quote = () => (
  <section
    className={
      'box-border flex-shrink-0 w-full h-min flex flow-row justify-center items-center md:p-24 px-5 py-24 mix-blend-luminosity md:min-h-[600px] overflow-hidden flex-1 relative content-center flex-nowrap md:gap-[10px] gap-[40px]'
    }
  >
    <Carousel images={index} altName={'fotomiranda home'} />
    <h1
      className={
        'flex-shrink-0 flex-1 w-px h-auto whitespace-pre-wrap break-words max-w-[1000px] z-10 relative font-medium font-[Goblin-One] text-stone-600 md:text-[80px] text-4xl tracking-normal leading-[1.1] text-center'
      }
    >
      {t('quoteMessage')}
    </h1>
  </section>
);

export default Quote;

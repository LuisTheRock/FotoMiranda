import { t } from 'i18next';

import { index } from '../assets/home';
import Carousel from '../components/ui/Carousel';

const Quote = () => (
  // <section
  //   className={
  //     'box-border flex-shrink-0 w-full h-min flex flow-row justify-center items-center md:p-24 px-5 py-24 mix-blend-luminosity md:min-h-[600px] overflow-hidden flex-1 relative content-center flex-nowrap md:gap-[10px] gap-[40px]'
  //   }
  // >
  //   <Carousel images={index} altName={'fotomiranda home'} />
  //   <h1
  //     className={
  //       'flex-shrink-0 flex-1 w-px h-auto whitespace-pre-wrap break-words max-w-[1000px] z-10 relative font-normal font-Dosis text-stone-600 md:text-[80px] text-4xl tracking-normal leading-[1.1] text-center'
  //     }
  //   >
  //     {t('quoteMessage')}
  //   </h1>
  // </section>
  <section className={'mt-16 sm:mt-20 '}>
    <div
      className={
        '-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 '
      }
    >
      <div
        className={
          'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'
        }
      >
        <img
          src={index[0]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div
        className={
          'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2'
        }
      >
        <img
          src={index[1]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div
        className={
          'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'
        }
      >
        <img
          src={index[2]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div
        className={
          'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2'
        }
      >
        <img
          src={index[3]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div
        className={
          'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'
        }
      >
        <img
          src={index[4]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
    <div className={''}>
      <h1 className={'font-normal font-Dosis text-4xl text-zinc-800 z-10'}>
        {t('quoteMessage')}
      </h1>
    </div>
  </section>
);

export default Quote;

import { t } from 'i18next';

import Header from '../components/Header';

const Home = () => (
  <section
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-center md:p-24 p-5 min-h-[800px] overflow-hidden relative content-center flex-nowrap gap-0'
    }
  >
    <Header />
    <article
      className={
        'flex-shrink-0 w-full h-min flex flex-col justify-center items-center overflow-visible flex-1 relative p-0 content-center flex-nowrap gap-[10px]'
      }
    >
      <h1
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre z-10 relative font-normal font-DancingScript md:text-8xl text-3xl tracking-normal uppercase leading-[1.1] text-center'
        }
      >
        {t('principalHeader')}
      </h1>
      <h2
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre z-10 relative font-normal font-[Manrope] text-sm md:tracking-[2em] tracking-widest leading-[1.1] text-center uppercase'
        }
      >
        {t('subHeader')}
      </h2>
    </article>
  </section>
);

export default Home;

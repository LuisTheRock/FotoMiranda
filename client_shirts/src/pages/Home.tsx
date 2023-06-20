import { t } from 'i18next';

import { index } from '../assets/home';
import Carousel from '../components/ui/Carousel';

const Home = () => (
  <section>
    <main className={'h-screen relative select-none'}>
      <Carousel images={index} altName={'fotomiranda home'} />

      <article
        className={
          'flex w-full items-center bottom-10 justify-center absolute rounded-lg px-2 pt-1 '
        }
      >
        <h1
          className={
            'text-center lg:text-5xl md:text-4xl text-3xl text-white font-normal font-DancingScript'
          }
        >
          {t('principalHeader')}
        </h1>
      </article>
    </main>
  </section>
);

export default Home;

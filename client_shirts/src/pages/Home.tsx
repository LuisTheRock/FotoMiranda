import { t } from 'i18next';

import { index } from '../assets/home';
import Carousel from '../components/ui/Carousel';

const Home = () => (
  <section>
    <div className={'h-screen relative'}>
      <Carousel images={index} altName={'fotomiranda home'} />

      <article
        className={
          'flex w-full items-center bottom-10 justify-center absolute rounded-lg px-2 pt-1'
        }
      >
        <header
          className={
            'text-center lg:text-5xl md:text-4xl text-3xl text-white font-normal font-DancingScript'
          }
        >
          {t('principalHeader')}
        </header>
      </article>
    </div>
  </section>
);

export default Home;

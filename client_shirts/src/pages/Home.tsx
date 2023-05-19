import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { t } from 'i18next';

import { index } from '../assets/home';
import Carousel from '../components/ui/Carousel';

const Home = () => (
  <section>
    <div className={`h-screen relative`}>
      <Carousel images={index} altName={'fotomiranda home'} />

      <div
        className={
          'flex w-full flex-col items-center justify-center bottom-0 absolute gap-y-2 -h-1/4'
        }
      >
        <h1
          className={
            'text-center md:text-5xl text-3xl font-normal text-white font-DancingScript'
          }
        >
          {t('principalHeader')}
        </h1>
        <a href={'#about'}>
          <ChevronDownIcon className={'md:w-16 w-10 stroke-1 stroke-white'} />
        </a>
      </div>
    </div>
  </section>
);

export default Home;

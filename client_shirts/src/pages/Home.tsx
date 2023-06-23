import { t } from 'i18next';

import { index } from '../assets/home';
import Carousel from '../components/ui/Carousel';

const Home = () => (
  <section id={'home'}>
    <div
      className={
        'box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-center p-24 min-h-[800px] overflow-hidden relative content-center flex-nowrap rounded-none gap-3'
      }
    >
      <h1
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre relative font-normal font-DancingScript text-[80px] tracking-normal leading-[1.1] text-center'
        }
      >
        CAPTURE YOUR MOMENTS
      </h1>
      <div
        className={
          'box-border flex-shrink-0 w-full h-min flex flex-row justify-between items-center pb-[50px] overflow-hidden z-10 flex-1 relative content-center flex-nowrap rounded-none'
        }
      >
        <p
          className={
            'flex-shrink-0 w-auto h-auto whitespace-pre relative font-normal font-mono  text-lg tracking-normal leading-tight'
          }
        >
          Foto Miranda
        </p>
        <p>Let's Go</p>
        <p>June 22, 2023</p>
      </div>
      <div
        className={
          'flex-shrink-0 w-full h-[500px] block grayscale overflow-hidden relative bg-cover bg-no-repeat bg-center rounded-[20px]'
        }
      >
        OLA
      </div>
    </div>
  </section>
);

export default Home;

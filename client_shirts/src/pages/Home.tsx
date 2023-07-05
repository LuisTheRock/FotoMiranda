import { t } from 'i18next';

const Home = () => (
  <section className={'sm:px-8 mt-9 h-[400px] flex items-center'}>
    <div className={'mx-auto max-w-7xl lg:px-8'}>
      <div className={'relative px-4 sm:px-8 lg:px-12'}>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <div className={'mx-w-2xl flex flex-col items-center text-center'}>
            <h1
              className={
                'md:text-5xl text-4xl font-normal font-DancingScript tracking-normal text-zinc-800 dark:text-zinc-100 uppercase'
              }
            >
              {t('principalHeader')}
            </h1>
            <h2
              className={
                'mt-6 font-normal text-base font-[Manrope] tracking-thin text-zinc-600 dark:text-zinc-400 uppercase'
              }
            >
              {t('subHeader')}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

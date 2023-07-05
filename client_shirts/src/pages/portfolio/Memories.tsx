import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import PhotoMemories from '../../assets/Bloglovin’.jfif';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import PortfolioCarousel from './PortfolioCarousel';

const Memories = () => (
  <div className={'flex h-full flex-col bg-zinc-50 dark:bg-black'}>
    <div className={'fixed inset-0 flex justify-center sm:px-8'}>
      <div className={'flex w-full max-w-7xl lg:px-8'}>
        <div
          className={
            'w-full ring-1 bg-[#fca311] ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'
          }
        />
      </div>
    </div>
    <div className={'relative'}>
      <Header />
      <main>
        <section className={'sm:px-8 mt-16 lg:mt-32'}>
          <div className={'mx-auto max-w-7xl lg:px-8'}>
            <div className={'relative px-4 sm:px-8 lg:px-12'}>
              <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
                <div className={'xl:relative'}>
                  <div className={'mx-auto max-w-2xl'}>
                    <Link
                      to={'..'}
                      aria-label={'Go back'}
                      type={'button'}
                      className={
                        'group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0'
                      }
                    >
                      <ArrowLeftIcon
                        className={
                          'h-5 w-5 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400'
                        }
                      />
                    </Link>
                    <article>
                      <div
                        className={
                          'flex md:flex-row flex-col justify-between md:gap-32 gap-14'
                        }
                      >
                        <header className={'flex flex-col'}>
                          <h1
                            className={
                              'mt-6 text-4xl font-bold tracking-tight font-Dosis uppercase text-zinc-800 dark:text-zinc-100 sm:text-5xl'
                            }
                          >
                            {t('memoriesTitle')}
                          </h1>
                          <p
                            className={
                              'mt-10 font-Montserrat text-base text-zinc-800 dark:text-zinc-100'
                            }
                          >
                            {t('memoriesBody')}
                          </p>
                        </header>

                        <img
                          src={PhotoMemories}
                          alt={'Memories'}
                          loading={'lazy'}
                          className={
                            'grayscale mix-blend-luminosity block rounded-2xl h-[400px] aspect-square inset-0'
                          }
                        />
                      </div>
                      <PortfolioCarousel
                        idProps={'carousels'}
                        classNameProps={'mt-10'}
                      />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
);

export default Memories;

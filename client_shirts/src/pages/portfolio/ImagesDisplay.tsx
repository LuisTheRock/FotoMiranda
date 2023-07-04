import { t } from 'i18next';

import PhotoDisplayed from '../../assets/Walpeper morrem.jpg';
import { layout } from '../../style';

const ImagesDisplay = () => (
  <section className={'sm:px-8 mt-24 md:mt-28'}>
    <div className={'mx-auto max-w-7xl lg:px-8'}>
      <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
        <div
          className={
            'mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'
          }
        >
          <div
            className={
              'relative aspect-auto w-full flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl'
            }
          >
            <img
              src={PhotoDisplayed}
              alt={''}
              className={'z-10 h-full w-full object-cover rounded-xl '}
            />
          </div>
          <div className={'flex flex-col gap-5 justify-center'}>
            <h3
              className={
                'text-3xl font-light font-Dosis tracking-tight text-zinc-800 dark:text-zinc-100'
              }
            >
              {t('carouselSectionTitle')}
            </h3>
            <p
              className={
                'relative font-Montserrat font-light text-base text-zinc-600 dark:text-zinc-400'
              }
            >
              {t('carouselSectionBody')}
            </p>
            <a
              className={`inline-flex w-min justify-center rounded-md py-3 px-4 outline-offset-2 active:transition-none bg-zinc-50 text-zinc-900 hover:bg-gold active:bg-gold active:text-zinc-900/50 dark:bg-zinc-500/50 dark:text-zinc-300 dark:hover:text-zinc-800 dark:active:text-zinc-50/70 ${layout.buttonInOut}`}
              href={'/memories'}
            >
              <span
                className={
                  'text-sm inline-flex items-center font-medium font-Montserrat'
                }
              >
                {t('carouselSectionButtonLabel')}
                <svg
                  viewBox={'0 0 16 16'}
                  fill={'none'}
                  aria-hidden={'true'}
                  className={'ml-1 h-5 w-5 stroke-current'}
                >
                  <path
                    d={'M6.75 5.75 9.25 8l-2.5 2.25'}
                    stroke-width={'1.5'}
                    stroke-linecap={'round'}
                    stroke-linejoin={'round'}
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ImagesDisplay;

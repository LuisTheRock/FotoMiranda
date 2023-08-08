import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PhotoDisplayed from '../../assets/Walpeper morrem.jpg';
import { layout } from '../../style';

const ImagesDisplay = () => {
  const { t } = useTranslation();

  return (
    <section className={'sm:px-8 mt-24 md:mt-36'}>
      <div className={'mx-auto max-w-7xl lg:px-8'}>
        <div className={'relative px-4 sm:px-8 lg:px-12'}>
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
                  alt={'Image to see the carousel'}
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
                <Link
                  to={'/memories'}
                  className={`inline-flex w-fit justify-center rounded-md py-3 px-4 outline-offset-2 active:transition-none bg-zinc-50 text-zinc-900 hover:bg-gold active:bg-gold active:text-zinc-900/50 dark:bg-zinc-500/50 dark:text-zinc-300 dark:hover:text-zinc-800 dark:active:text-zinc-50/70 ${layout.buttonInOut}`}
                >
                  <span
                    className={
                      'text-sm inline-flex items-center font-medium font-Montserrat'
                    }
                  >
                    {t('carouselSectionButtonLabel')}
                    <ChevronRightIcon className={'w-3 ml-1'} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesDisplay;

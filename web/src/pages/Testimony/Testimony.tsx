import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Testimony = () => {
  const { t } = useTranslation();

  return (
    <section className={'sm:px-8 mt-10 md:mt-12 '}>
      <div className={'mx-auto max-w-7xl lg:px-8'}>
        <div className={'relative px-4 sm:px-8 lg:px-12 py-16 rounded-2xl'}>
          <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
            <article
              className={
                'w-full flex flex-col justify-center items-center gap-16'
              }
            >
              <h2
                className={
                  'uppercase font-Dosis font-medium text-2xl dark:text-zinc-100'
                }
              >
                {t('testimonyTitle')}
              </h2>
              <div className={'flex flex-row items-center gap-0 md:gap-10'}>
                <div>
                  <ArrowLongLeftIcon
                    className={
                      'w-10 stroke-1 dark:stroke-zinc-50 hidden md:flex'
                    }
                  />
                </div>
                <p
                  className={
                    'font-DancingScript text-xl font-medium text-center text-zinc-600 tracking-wide dark:text-zinc-200 max-w-[600px]'
                  }
                >
                  {t('testimonyBody')}
                </p>
                <div>
                  <ArrowLongRightIcon
                    className={
                      'w-10 stroke-1 dark:stroke-zinc-50 hidden md:flex'
                    }
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;

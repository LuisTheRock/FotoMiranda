import { t } from 'i18next';

/**
 *
 * This component renders the info about the company and the location in google maps.
 * Also have a form that the user can fullfil to enter in contact with the company.
 */
const Contacts = () => (
  <article className={'group relative flex flex-col items-start'}>
    <h2
      className={
        'text-3xl mb-3 font-normal font-Dosis tracking-tight text-zinc-800 dark:text-zinc-100'
      }
    >
      <div
        className={
          'absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'
        }
      ></div>
      <a href={'/contact'}>
        <span
          className={
            'absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'
          }
        ></span>
        <span className={'relative z-10'}>{t('reachUsTitle')}</span>
      </a>
    </h2>

    <p
      className={
        'mt-3 relative z-10 font-Montserrat font-light text-sm text-zinc-600 dark:text-zinc-400'
      }
    >
      {t('reachUsBody')}
    </p>
    <div
      aria-hidden={true}
      className={
        'relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'
      }
    >
      {t('contactUsLabel')}
      <svg
        viewBox={'0 0 16 16'}
        fill={'none'}
        aria-hidden={'true'}
        className={'ml-1 h-4 w-4 stroke-current'}
      >
        <path
          d={'M6.75 5.75 9.25 8l-2.5 2.25'}
          stroke-width={'1.5'}
          stroke-linecap={'round'}
          stroke-linejoin={'round'}
        ></path>
      </svg>
    </div>
  </article>
);

export default Contacts;

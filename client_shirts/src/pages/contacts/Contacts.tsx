import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 *
 * This component renders the info about the company and the location in google maps.
 * Also have a form that the user can fullfil to enter in contact with the company.
 */
const Contacts = () => {
  const { t } = useTranslation();

  return (
    <article
      className={'group relative flex flex-col items-start'}
      id={'contactComp'}
    >
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
        <Link to={'/contact'}>
          <span
            className={
              'absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'
            }
          ></span>
          <span className={'relative z-10'}>{t('reachUsTitle')}</span>
        </Link>
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
        <ChevronRightIcon className={'w-3 ml-1 stroke-2'} />
      </div>
    </article>
  );
};

export default Contacts;

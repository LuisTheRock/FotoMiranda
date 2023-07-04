import { t } from 'i18next';

import GoogleMaps from '../../components/GoogleMaps';
import {
  ADDRESS,
  GOOGLE_MAPS_LATITUDE,
  GOOGLE_MAPS_LONGITUDE,
  GOOGLE_MAPS_ZOOM,
  PHONE_NUMBERS_LIST,
} from '../../data/Constants';

const ReachUs = () => (
  <section
    className={'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'}
  >
    <h2
      className={
        'flex text-xl font-normal text-zinc-900 font-Dosis dark:text-zinc-100'
      }
    >
      {t('reachUsLabel')}
    </h2>
    <span
      className={
        'flex text-sm font-light font-Dosis mt-4 text-zinc-900 dark:text-zinc-100'
      }
    >
      {ADDRESS}
    </span>

    {PHONE_NUMBERS_LIST.map(({ number }, index) => (
      <a
        key={index}
        href={`tel:${number.replace(/ /g, '')}`}
        className={
          'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-3 w-full'
        }
      >
        {number}
      </a>
    ))}

    <GoogleMaps
      lat={GOOGLE_MAPS_LATITUDE}
      lng={GOOGLE_MAPS_LONGITUDE}
      zoom={GOOGLE_MAPS_ZOOM}
      classNameProps={'w-full h-52 rounded-lg mt-5'}
    />
  </section>
);

export default ReachUs;

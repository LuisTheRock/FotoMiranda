import { t } from 'i18next';

import ImageUncles from '../../assets/tios.jpg';

const personsWork = [
  {
    src: ImageUncles,
    personName: 'Ricardo Miranda',
    role: t('teamMemberLead'),
  },
  {
    src: ImageUncles,
    personName: 'Eulália Miranda',
    role: t('teamMemberLead'),
  },
  {
    src: ImageUncles,
    personName: 'Joaquim Miranda',
    role: t('teamMemberVideo'),
  },
];

const Team = () => (
  <div
    className={'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'}
  >
    <h2
      className={
        'flex text-xl font-normal text-zinc-900 font-Dosis dark:text-zinc-100'
      }
    >
      {t('teamTitle')}
    </h2>
    <ol className={'mt-6 space-y-4'}>
      {personsWork.map(({ src, personName, role }, index) => (
        <li className={'flex gap-4'} key={index}>
          <div
            className={
              'relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'
            }
          >
            <img src={src} alt={''} className={'h-10 w-10'} />
          </div>
          <dl className={'flex flex-auto flex-wrap gap-x-2'}>
            <dt className={'sr-only'}>Name</dt>
            <dd
              className={
                'w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'
              }
            >
              {personName}
            </dd>
            <dt className={'sr-only'}>Role</dt>
            <dd className={'text-xs text-zinc-500 dark:text-zinc-400'}>
              {role}
            </dd>
          </dl>
        </li>
      ))}
    </ol>
  </div>
);

export default Team;

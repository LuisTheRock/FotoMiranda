import { t } from 'i18next';

import ImageUncles from '../../assets/tios.jpg';
import PersonalPage from '../../components/ui/PersonalPage';

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
  <section
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-col justify-center items-center md:p-24 px-5 py-[60px] overflow-hidden flex-1 relative content-center flex-nowrap md:gap-[60px] gap-[40px]'
    }
  >
    <title
      className={
        'flex-shrink-0 w-full h-min flex flex-col justify-start items-center max-w-full overflow-hidden flex-1 relative p-0 content-center flex-nowrap md:gap-[10px] gap-[20px]'
      }
    >
      <h2
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-visible flex-1 relative font-normal font-serif md:text-5xl text-4xl tracking-normal leading-tight text-center'
        }
      >
        {t('teamTitle')}
      </h2>
      <h2
        className={
          'flex-shrink-0 w-[600px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-normal font-mono text-lg tracking-normal leading-normal text-center'
        }
      >
        {t('teamBody')}
      </h2>
    </title>
    <article
      className={
        'flex-shrink-0 w-full h-min flex md:flex-row flex-col justify-center items-center max-w-full overflow-visible flex-1 relative p-0 content-center flex-nowrap md:gap-[10px] gap-[20px]'
      }
    >
      {personsWork.map(({ src, personName, role }, index) => (
        <div key={index}>
          <PersonalPage
            src={src}
            alt={'fotoMiranda'}
            personName={personName}
            role={role}
          />
        </div>
      ))}
    </article>
  </section>
);

export default Team;

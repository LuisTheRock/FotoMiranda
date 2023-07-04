import { t } from 'i18next';

const About = () => {
  const paragraphs = [
    t('aboutCompany1p'),
    t('aboutCompany2p'),
    t('aboutCompany3p'),
    t('aboutCompany4p'),
  ];

  return (
    <article className={'group relative flex flex-col items-start'}>
      <h2
        className={
          'text-3xl mb-3 font-normal font-Dosis tracking-tight text-zinc-800 dark:text-zinc-100'
        }
      >
        <span className={'relative z-10'}>{t('aboutUsTitle')}</span>
        <div
          className={
            'absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'
          }
        />
      </h2>

      {paragraphs.map((paragraph, index) => (
        <p
          className={
            'mt-3 relative z-10 font-Montserrat font-light text-sm text-zinc-600 dark:text-zinc-400'
          }
          key={index}
        >
          {paragraph}
        </p>
      ))}
    </article>
  );
};

export default About;

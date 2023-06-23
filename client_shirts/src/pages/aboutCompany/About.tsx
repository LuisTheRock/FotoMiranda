import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const paragraphs = [
    t('aboutCompany1p'),
    t('aboutCompany2p'),
    t('aboutCompany3p'),
    t('aboutCompany4p'),
  ];

  return (
    <section
      id={'about'}
      className={
        'box-border flex-shrink-0 w-full h-min flex flex-col justify-center items-center p-24 overflow-hidden relative content-center flex-nowrap gap-0'
      }
    >
      <main
        className={
          'flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-hidden relative p-0 content-start flex-nowrap gap-10'
        }
      >
        <h2
          className={
            'flex-shrink-0 w-full h-auto whitespace-pre break-words overflow-visible relative font-semibold font-Montserrat text-4xl tracking-normal leading-normal text-left'
          }
        >
          About Us
        </h2>
        <div
          className={
            'flex-shrink-0 w-[800px] h-auto whitespace-pre-wrap break-words max-w-full relative font-normal font-mono text-lg tracking-normal leading-normal text-left'
          }
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </main>
    </section>
  );
};

export default About;

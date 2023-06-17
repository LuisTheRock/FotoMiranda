import { useTranslation } from 'react-i18next';

import ImageUncles from '../../assets/tios.jpg';

const About = () => {
  const { t } = useTranslation();

  const paragraphs = [
    t('aboutCompany2p'),
    t('aboutCompany3p'),
    t('aboutCompany4p'),
    t('aboutCompany5p'),
  ];

  return (
    <section id={'about'} className={'h-screen relative'}>
      <div
        className={
          'md:bg-port2 md:absolute flex md:top-[15%] left-0 md:bottom-[15%] md:left-[40%] md:rounded-l-md rounded-none md:shadow-xl shadow-none'
        }
      >
        <article className={'md:pl-36 md:pr-10 md:pt-10 px-6 py-20 static'}>
          <div
            className={
              'flex relative align-middle justify-center flex-col h-full'
            }
          >
            <h1
              className={
                'text-5xl mb-10 justify-start font-light font-Cormorant'
              }
            >
              {t('aboutCompanyTitle')}
            </h1>
            <div className={'grid gap-y-3'}>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={'lg:text-lg text-md font-light font-Montserrat'}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>

      <div
        className={
          'md:absolute md:left-[5%] md:top-[21%] md:right-[55%] md:mb-0 md:mx-0 flex px-6 justify-center'
        }
      >
        <img src={ImageUncles} className={'md:w-full w-[50%]'} />
      </div>
    </section>
  );
};

export default About;

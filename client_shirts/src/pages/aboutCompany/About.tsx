import ImageUncles from '../../assets/tios.jpg';
import LogoSVG from '../../assets/Logo_1.png';
import { useTranslation } from 'react-i18next';

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
          'bg-port2 md:top-[15%] left-0 md:bottom-[15%] md:left-[45%] absolute'
        }
      >
        <div
          className={
            'flex flex-col md:pt-14 pt-14 md:pl-48 h-screen px-6 md:pr-20'
          }
        >
          {/* <div className={'flex items-center'}> */}
          <h1 className={'text-5xl justify-start font-light font-Cormorant'}>
            {t('aboutCompanyTitle')}
          </h1>
          {/* <img
              src={LogoSVG}
              className={
                'left-[78%] top-[5%] hidden md:flex bg-port2 rounded-full absolute md:h-24 h-44'
              }
            /> */}
          {/* </div> */}

          <div className={'mt-8'}>
            {paragraphs.map((paragraph, index) => (
              <p
                className={`text-lg mb-3 font-light font-Montserrat`}
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div
        className={
          'absolute md:left-[10%] md:top-[20%] md:right-[50%] bottom-0 md:mx-0 mx-6 mb-5 md:mb-0'
        }
      >
        <img src={ImageUncles} className={'w-full'} />
      </div>
    </section>
  );
};

export default About;

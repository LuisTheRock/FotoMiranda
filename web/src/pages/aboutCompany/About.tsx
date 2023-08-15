import { useTranslation } from 'react-i18next';

import ParagraphList from '../../components/ParagraphList';

const About = () => {
  const { t } = useTranslation();

  const paragraphs = [
    t('aboutCompany1p'),
    t('aboutCompany2p'),
    t('aboutCompany3p'),
    t('aboutCompany4p'),
  ];

  return (
    <section className={'sm:px-8 mt-24 md:mt-28 '}>
      <div className={'mx-auto max-w-7xl lg:px-8'}>
        <div className={'relative px-4 sm:px-8 lg:px-12 '}>
          <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
            <div
              className={
                'w-full bg-lightGray dark:bg-lightGray/10 shadow-xl shadow-black/70 dark:shadow-black py-16 rounded-2xl px-8'
              }
            >
              <article className={'group relative w-full flex-col'}>
                <h2
                  className={
                    'text-3xl mb-4 font-normal font-Cormorant tracking-tight text-zinc-700 dark:text-zinc-100'
                  }
                >
                  {t('aboutUsTitle')}
                </h2>
                <div className={'flex flex-col md:flex-row md:gap-x-10'}>
                  <div className={'w-full md:w-1/2'}>
                    <ParagraphList paragraphs={paragraphs.slice(0, 2)} />
                  </div>
                  <div className={'w-full md:w-1/2'}>
                    <ParagraphList paragraphs={paragraphs.slice(2)} />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

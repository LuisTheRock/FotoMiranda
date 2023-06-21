import { ArrowDownIcon } from '@heroicons/react/24/outline';

import Section from '../components/ui/Section';
import TitleSection from '../components/ui/TitleSection';

const VideosPage = () => {
  return (
    <section
      id={'videos'}
      className={'h-screen pb-5 bg-gradient-to-b from-black to-primary'}
    >
      <Section>
        <div className={`col-start-2 col-end-12`}>
          <TitleSection
            title={'videosStage'}
            titleHeight_Font={
              'text-white font-Montserrat font-light text-4xl mt-10'
            }
            titleLayout={'col-start-1 col-end-13 text-center'}
          />
          <TitleSection
            title={'videosStage1'}
            titleHeight_Font={
              'text-white font-Montserrat font-light text-4xl mt-10'
            }
            titleLayout={'col-start-1 col-end-13 text-center'}
          />
          <div className={'flex justify-center mt-10 h-fit'}>
            <a href={'#portfolio'}>
              <ArrowDownIcon
                className={`md:w-32 w-20 md:h-32 md:mt-4 mt-0 md:p-7 p-4 stroke-black stroke-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-bounce`}
              />
            </a>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default VideosPage;

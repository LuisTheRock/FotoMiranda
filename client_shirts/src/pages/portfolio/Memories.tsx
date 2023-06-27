import { t } from 'i18next';
import PhotoMemories from '../../assets/Bloglovin’.jfif';
import { indexFriends } from '../../assets/portfolio/friends/indexFriends';
import { indexLove } from '../../assets/portfolio/love/indexLove';
import { indexNascimento } from '../../assets/portfolio/nascimento/indexNascimento';
import { indexWedding } from '../../assets/portfolio/wedding/IndexWedding';
import { Footer } from '../../components/Footer';
import DisplayPortSection from './DisplayPortSection';

const Memories = () => (
  <>
    <section
      className={
        'box-border flex-shrink-0 w-full h-min flex md:flex-row flex-col justify-center items-center md:p-24 p-5 bg-[#fca311] md:min-h-[800px] overflow-hidden relative content-center flex-nowrap'
      }
    >
      <main
        className={
          'flex-shrink-0 w-[1000px] h-min flex md:flex-row flex-col md:justify-center justify-start items-center max-w-full overflow-hidden relative content-center flex-nowrap md:gap-[100px] gap-7'
        }
      >
        <article
          className={
            'flex-shrink-0 md:flex-1 md:w-px w-full h-min flex flex-col justify-center items-start overflow-hidden relative content-start flex-nowrap gap-[30px]'
          }
        >
          <h1
            className={
              'flex-shrink-0 w-full h-auto whitespace-pre relative font-normal font-[Elise] md:text-7xl text-6xl tracking-normal uppercase leading-[1] md:text-left text-center'
            }
          >
            {t('memoriesTitle')}
          </h1>
          <p
            className={
              'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words relative font-normal font-[ALbert-Sans, Albert-Sans-Placeholder] text-xl tracking-normal leading-[1.4] md:text-left text-center'
            }
          >
            {t('memoriesBody')}
          </p>

          <a
            href={'#carousels'}
            className={
              'box-border flex-shrink-0 w-full h-min flex flex-row justify-center items-center p-3 bg-white overflow-hidden relative content-center flex-nowrap gap-3 rounded-xl'
            }
          >
            <p
              className={
                'flex-shrink-0 w-auto h-auto whitespace-pre overflow-visible relative font-normal font-[Albert Sans, Albert Sans Placeholder] text-base tracking-normal uppercase leading-normal text-center'
              }
            >
              {t('memoriesButtonTitle')}
            </p>
          </a>
        </article>
        <img
          src={PhotoMemories}
          alt={'fotoMiranda'}
          className={
            'flex-shrink-0 flex-1 md:w-px aspect-square md:h-[600px] h-[300px] block grayscale mix-blend-luminosity overflow-hidden relative bg-cover bg-no-repeat bg-center rounded-[20px]'
          }
        />
      </main>
    </section>

    <div className={'md:px-24 px-5 py-14'} id={'carousels'}>
      <DisplayPortSection
        // bg_color={'bg-port4'}
        // bg_color={'bg-gradient-to-br from-pink-400 via-purple-300 to-blue-200'}
        bg_color={'bg-white'}
        title={'portfolioSection4'}
        images={indexWedding}
        altName={'fotoMiranda weeding'}
      />
      <DisplayPortSection
        // bg_color={'bg-port1'}
        bg_color={'bg-white'}
        title={'portfolioSection1'}
        images={indexFriends}
        altName={'fotoMiranda friends'}
      />
      <DisplayPortSection
        // bg_color={'bg-port2'}
        // bg_color={'bg-gradient-to-br from-red-500 via-red-400 to-red-300'}
        bg_color={'bg-white'}
        title={'portfolioSection2'}
        images={indexLove}
        altName={'fotoMiranda love'}
      />
      <DisplayPortSection
        // bg_color={'bg-port3'}
        // bg_color={'bg-gradient-to-br from-white to-sky-200'}
        bg_color={'bg-white'}
        title={'portfolioSection3'}
        images={indexNascimento}
        altName={'fotoMiranda birth'}
      />
    </div>
    <Footer />
  </>
);

export default Memories;

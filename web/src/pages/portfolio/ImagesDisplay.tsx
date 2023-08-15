import { indexFriends } from '../../assets/portfolio/friends/indexFriends';
import { indexLove } from '../../assets/portfolio/love/indexLove';
import { indexNascimento } from '../../assets/portfolio/nascimento/indexNascimento';
import { indexWedding } from '../../assets/portfolio/wedding/IndexWedding';
import DisplayPortSection from './DisplayPortSection';

const ImagesDisplay = () => {
  return (
    <section className={'sm:px-8 p-0'}>
      <div className={'mx-auto max-w-7xl lg:px-8'}>
        <div className={'relative px-4 sm:px-8 lg:px-12'}>
          <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
            <div className={'mx-auto w-full'}>
              <div id={'carousels'} className={'w-full h-full'}>
                <DisplayPortSection
                  bg_color={'bg-gray-400'}
                  title={'portfolioSection4'}
                  images={indexWedding}
                  altName={'fotoMiranda weeding'}
                />
                <DisplayPortSection
                  bg_color={'bg-white'}
                  title={'portfolioSection1'}
                  images={indexFriends}
                  altName={'fotoMiranda friends'}
                />
                <DisplayPortSection
                  bg_color={'bg-white'}
                  title={'portfolioSection2'}
                  images={indexLove}
                  altName={'fotoMiranda love'}
                />
                <DisplayPortSection
                  bg_color={'bg-white'}
                  title={'portfolioSection3'}
                  images={indexNascimento}
                  altName={'fotoMiranda birth'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesDisplay;

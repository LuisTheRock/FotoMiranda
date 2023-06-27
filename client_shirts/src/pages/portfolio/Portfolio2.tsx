import { indexFriends } from '../../assets/portfolio/friends/indexFriends';
import { indexLove } from '../../assets/portfolio/love/indexLove';
import { indexNascimento } from '../../assets/portfolio/nascimento/indexNascimento';
import { indexWedding } from '../../assets/portfolio/wedding/IndexWedding';
import DisplayPortSection from './DisplayPortSection';

const Portfolio2 = () => (
  <div id={'portfolio'}>
    <DisplayPortSection
      // bg_color={'bg-port4'}
      bg_color={'bg-gradient-to-br from-pink-400 via-purple-300 to-blue-200'}
      title={'portfolioSection4'}
      images={indexWedding}
      altName={'fotoMiranda weeding'}
    />
    <DisplayPortSection
      bg_color={'bg-port1'}
      title={'portfolioSection1'}
      images={indexFriends}
      altName={'fotoMiranda friends'}
    />
    <DisplayPortSection
      // bg_color={'bg-port2'}
      bg_color={'bg-gradient-to-br from-red-500 via-red-400 to-red-300'}
      title={'portfolioSection2'}
      images={indexLove}
      altName={'fotoMiranda love'}
    />
    <DisplayPortSection
      // bg_color={'bg-port3'}
      bg_color={'bg-gradient-to-br from-white to-sky-200'}
      title={'portfolioSection3'}
      images={indexNascimento}
      altName={'fotoMiranda birth'}
    />
  </div>
);

export default Portfolio2;

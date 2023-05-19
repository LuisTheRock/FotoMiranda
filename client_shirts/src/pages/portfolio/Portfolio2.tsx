import { indexFriends } from '../../assets/portfolio/friends/indexFriends';
import { indexLove } from '../../assets/portfolio/love/indexLove';
import { indexNascimento } from '../../assets/portfolio/nascimento/indexNascimento';
import { indexWedding } from '../../assets/portfolio/wedding/IndexWedding';
import DisplayPortSection from './DisplayPortSection';

const Portfolio2 = () => (
  <div id="portfolio">
    <DisplayPortSection
      bg_color={'bg-port4'}
      // bg_color={'bg-white-beige'}
      title={'portfolioSection4'}
      images={indexWedding}
      altName={'fotoMiranda weeding'}
    />
    <DisplayPortSection
      bg_color={'bg-port1'}
      // bg_color={'bg-indigo-50'}
      title={'portfolioSection1'}
      images={indexFriends}
      altName={'fotoMiranda friends'}
    />
    <DisplayPortSection
      bg_color={'bg-port2'}
      // bg_color={'bg-indigo-100'}
      title={'portfolioSection2'}
      images={indexLove}
      altName={'fotoMiranda love'}
    />
    <DisplayPortSection
      bg_color={'bg-port3'}
      // bg_color={'bg-indigo-50'}
      title={'portfolioSection3'}
      images={indexNascimento}
      altName={'fotoMiranda birth'}
    />
  </div>
);

export default Portfolio2;

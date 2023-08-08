import { indexFriends } from '../assets/portfolio/friends/indexFriends';
import { indexLove } from '../assets/portfolio/love/indexLove';
import { indexNascimento } from '../assets/portfolio/nascimento/indexNascimento';
import { indexWedding } from '../assets/portfolio/wedding/IndexWedding';
import { IPortfolioSection } from '../components/ui/PortfolioSection';
import IRoutes from '../interfaces/IRoutes';
import styles from '../style';

export const TITLE_PADDING_PROPS = 'pt-16 pb-8';

// ---------------------------------------------------

export const GOOGLE_MAPS_LATITUDE = 41.00038760353807;
export const GOOGLE_MAPS_LONGITUDE = -8.566087392223158;
export const GOOGLE_MAPS_ZOOM = 17;
export const ADDRESS = 'R. Dr. Amorim, Nº 513, Mozelos, Santa Maria da Feira';

export const routesNavbar: IRoutes[] = [
  {
    idTranslate: 'routesNavbar2',
    href: '/about',
    id: 'about',
  },
  {
    idTranslate: 'routesNavbar1',
    href: '/portfolio',
    id: 'portfolio',
  },

  {
    idTranslate: 'routesNavbar3',
    href: '/contacts',
    id: 'contacts',
  },
];

export const languagesOption = [
  {
    className: 'flex w-full text-center font-poppins',
    language: 'en',
    name: 'EN',
  },
  {
    className: 'flex w-full text-center font-poppins',
    language: 'pt',
    name: 'PT',
  },
];

// =======================

export const portfolioSections: IPortfolioSection[] = [
  {
    colStart: `${styles.colStart}`,
    colEnd: 'md:col-end-7 col-end-13',
    title: 'portfolioSection1',
    images: indexFriends,
    altName: 'friends',
  },
  {
    colStart: 'md:col-start-7 col-start-1',
    colEnd: `${styles.colEnd}`,
    title: 'portfolioSection2',
    images: indexLove,
    altName: 'love',
  },
  {
    colStart: `${styles.colStart}`,
    colEnd: 'md:col-end-7 col-end-13',
    title: 'portfolioSection3',
    images: indexNascimento,
    altName: 'birth',
  },
  {
    colStart: 'md:col-start-7 col-start-1',
    colEnd: `${styles.colEnd}`,
    title: 'portfolioSection4',
    images: indexWedding,
    altName: 'wedding',
  },
];

export const PHONE_NUMBERS_LIST = [
  {
    number: '914 871 824',
  },
  {
    number: '916 803 134',
  },
  {
    number: '919 752 243',
  },
];

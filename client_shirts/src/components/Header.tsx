import { t } from 'i18next';
import Logo from '../assets/logo_desktop2.png';
import Navbar from './navbar/Navbar';

const Header = () => (
  <header
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-row justify-between items-center overflow-hidden relative z-10 content-center flex-nowrap'
    }
  >
    <img src={Logo} alt={'Logo'} className={'w-40 h-auto'} />
    <p
      className={
        'flex-shrink-0 w-auto h-auto whitespace-pre relative font-normal font-mono text-base tracking-normal leading-[1.2] hidden md:flex'
      }
    >
      {t('navbarTitle')}
    </p>
    <div className="z-10">
      <Navbar />
    </div>
  </header>
);

export default Header;

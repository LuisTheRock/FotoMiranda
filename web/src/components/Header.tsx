import Logo from '../assets/logo_desktop2.png';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header className={'sm:px-8'}>
      <div className={'mx-auto max-w-7xl lg:px-8'}>
        <div className={'relative px-4 sm:px-8 lg:px-12'}>
          <div className={'mx-auto max-w-4xl lg:max-w-5xl'}>
            <div
              className={
                'mx-auto max-w-5xl h-min flex flex-row justify-between items-center relative '
              }
            >
              <img
                src={Logo}
                alt={'Company logo name'}
                loading={'lazy'}
                className={'w-40 h-auto'}
              />
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

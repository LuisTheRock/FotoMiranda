import Logo from '../assets/logo_desktop2.png';
import Navbar from './navbar/Navbar';
import Section from './ui/Section';

const Header = () => (
  <header className={'fixed z-10 w-full'}>
    <Section otherProps={'w-full gap-y-1'}>
      <div className={'col-start-1 col-end-5'}>
        <a href={'#'} className="absolute z-10">
          <img
            src={Logo}
            alt={'Logo'}
            className={'w-40 fill-white bg-white bg-opacity-20 rounded-md'}
          />
        </a>
      </div>
      <div className={'col-start-6 col-end-13 items-end'}>
        <Navbar />
      </div>
    </Section>
  </header>
);

export default Header;

import ButtonLogOut from '../ui/ButtonLogOut';
import LanguageSelector from './LanguageSelector';

interface INavbarAuth {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
}

const NavbarAuthenticated = ({ isToggle, onAuthIconChange }: INavbarAuth) => {
  return (
    <div className={'flex'}>
      <LanguageSelector
        isToggle={isToggle}
        onAuthIconChange={onAuthIconChange}
      />
      <ButtonLogOut />
    </div>
  );
};

export default NavbarAuthenticated;

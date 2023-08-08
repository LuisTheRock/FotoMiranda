import ButtonLogOut from '../ui/ButtonLogOut';
import LanguageSelector from './LanguageSelector';
import ToggleDarkMode from './ToggleDarkMode';

interface INavbarAuth {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
}

const NavbarAuthenticated = ({ isToggle, onAuthIconChange }: INavbarAuth) => {
  return (
    <div className={'flex flex-row gap-5'}>
      <LanguageSelector
        isToggle={isToggle}
        onAuthIconChange={onAuthIconChange}
      />
      <ButtonLogOut />
      <ToggleDarkMode />
    </div>
  );
};

export default NavbarAuthenticated;

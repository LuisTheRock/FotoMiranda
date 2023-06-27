import { lazy, useState } from 'react';

import AuthIcon from '../../pages/auth/AuthIcon';
import { useSelector } from '../../utils/store';
import LanguageSelector from './LanguageSelector';

interface MenuState {
  [key: string]: boolean;
}

const NavbarAuthenticated = lazy(() => import('./NavbarAuthenticated'));

/**
 *
 * This component renders a navigation bar composed with a navigation menu and a language selector.
 * The component is composing them together and adding some styling and functionality
 *
 */
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const initialMenuStates: MenuState = {
    menu1: false,
    menu2: false,
    menu3: false,
  };
  const [menuStates, setMenuStates] = useState<MenuState>(initialMenuStates);

  const handleClick = (selectedId: string) => {
    setMenuStates((prevState) => {
      const newMenuStates = { ...initialMenuStates };
      newMenuStates[selectedId] = !prevState[selectedId];
      return newMenuStates;
    });
  };

  return (
    <nav className={`flex h-min w-min justify-end`}>
      {isAuth ? (
        <div
          className={
            'list-none  sm:flex hidden justify-end items-center flex-1'
          }
        >
          <NavbarAuthenticated
            isToggle={menuStates['3']}
            onAuthIconChange={() => handleClick('3')}
          />
        </div>
      ) : (
        <ul className={'flex relative flex-row justify-end items-center'}>
          <AuthIcon
            isToggle={menuStates['2']}
            onAuthIconChange={() => handleClick('2')}
          />
          <LanguageSelector
            isToggle={menuStates['3']}
            onAuthIconChange={() => handleClick('3')}
          />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

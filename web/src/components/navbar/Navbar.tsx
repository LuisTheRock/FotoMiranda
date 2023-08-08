import { lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from '../../utils/store';
import AuthIcon from './AuthIcon';
import LanguageSelector from './LanguageSelector';
import ToggleDarkMode from './ToggleDarkMode';

interface MenuState {
  [key: string]: boolean;
}

const NavbarAuthenticated = lazy(() => import('./NavbarAuthenticated'));

/**
 *
 * This component renders a navigation bar composed with a auth menu and a language selector and dark mode switch.
 * The component is composing them together and adding some styling and functionality
 *
 */
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const initialMenuStates: MenuState = {
    menu1: false,
    menu2: false,
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
        <NavbarAuthenticated
          isToggle={menuStates['2']}
          onAuthIconChange={() => handleClick('2')}
        />
      ) : (
        <ul
          className={
            'flex items-center content-center relative flex-row justify-end'
          }
        >
          <AuthIcon
            isToggle={menuStates['1']}
            onAuthIconChange={() => handleClick('1')}
          />
          <LanguageSelector
            isToggle={menuStates['2']}
            onAuthIconChange={() => handleClick('2')}
          />
          <ToggleDarkMode />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

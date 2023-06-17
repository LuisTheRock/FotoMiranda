import { lazy, useState } from 'react';

import AuthIcon from '../../pages/auth/AuthIcon';
import { useSelector } from '../../utils/store';
import LanguageSelector from './LanguageSelector';
import RoutesNavbar from './RoutesNavbar';
import SmallMenu from './SmallMenu';

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
    <nav className={`flex h-full w-full justify-between`}>
      {isAuth ? (
        <ul
          className={'list-none sm:flex hidden justify-end items-center flex-1'}
        >
          <NavbarAuthenticated
            isToggle={menuStates['3']}
            onAuthIconChange={() => handleClick('3')}
          />
        </ul>
      ) : (
        <>
          <ul
            className={`list-none sm:flex hidden justify-end items-center flex-1`}
          >
            <RoutesNavbar />
          </ul>
          <ul className={'sm:flex hidden justify-end items-center'}>
            <AuthIcon
              isToggle={menuStates['2']}
              onAuthIconChange={() => handleClick('2')}
            />
            <LanguageSelector
              isToggle={menuStates['3']}
              onAuthIconChange={() => handleClick('3')}
            />
          </ul>
        </>
      )}

      <div className={'sm:hidden flex flex-1 justify-end items-center'}>
        {isAuth ? (
          <div className={'flex'}>
            <NavbarAuthenticated
              isToggle={menuStates['3']}
              onAuthIconChange={() => handleClick('3')}
            />
          </div>
        ) : (
          <>
            <LanguageSelector
              isToggle={menuStates['3']}
              onAuthIconChange={() => handleClick('3')}
            />
            <AuthIcon
              isToggle={menuStates['2']}
              onAuthIconChange={() => handleClick('2')}
            />
            <SmallMenu
              isToggle={menuStates['1']}
              onAuthIconChange={() => handleClick('1')}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

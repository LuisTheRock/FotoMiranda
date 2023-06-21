import { t } from 'i18next';
import { lazy, useEffect, useState } from 'react';

import { routesNavbar } from '../../data/Constants';
import AuthIcon from '../../pages/auth/AuthIcon';
import { layout } from '../../style';
import { useSelector } from '../../utils/store';
import LanguageSelector from './LanguageSelector';
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

  // Define the sections and their corresponding text colors
  const sections = [
    { id: 'home', color: 'white' },
    { id: 'about', color: 'black' },
  ];

  // Initialize the state with the first section
  const [currentSection, setCurrentSection] = useState(sections[0]);

  // Define a function to check which section is in view
  const checkSection = () => {
    // Get the scroll position
    const scrollY = window.scrollY;

    // Loop through the sections and compare their offsets
    for (let i = 0; i < sections.length; i++) {
      // Get the element by id
      const element = document.getElementById(sections[i].id);

      // Get the element's offset and height
      const offset = element!.offsetTop;
      const height = element!.offsetHeight;

      // Check if the scroll position is within the element's range
      if (scrollY >= offset && scrollY < offset + height) {
        // Update the state with the current section
        setCurrentSection(sections[i]);
        break;
      }
    }
  };

  // Add the event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener('scroll', checkSection);
    return () => {
      window.removeEventListener('scroll', checkSection);
    };
  }, []);

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
            {routesNavbar.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer  font-normal h-fit text-lg px-4 py-1 ${layout.buttonInOut}`}
              >
                <a
                  className={`text-${currentSection.color}`}
                  href={`#${nav.id}`}
                >
                  {t(`${nav.idTranslate}`)}
                </a>
              </li>
            ))}
          </ul>
          <ul className={'sm:flex hidden justify-end items-center'}>
            <AuthIcon
              isToggle={menuStates['2']}
              onAuthIconChange={() => handleClick('2')}
              currentColor={`${currentSection.color}`}
            />
            <LanguageSelector
              isToggle={menuStates['3']}
              onAuthIconChange={() => handleClick('3')}
              currentColor={`${currentSection.color}`}
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
              currentColor={`${currentSection.color}`}
            />
            <AuthIcon
              isToggle={menuStates['2']}
              onAuthIconChange={() => handleClick('2')}
              currentColor={`${currentSection.color}`}
            />
            <SmallMenu
              isToggle={menuStates['1']}
              onAuthIconChange={() => handleClick('1')}
              currentColor={`${currentSection.color}`}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

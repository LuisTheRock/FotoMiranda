import LanguageSelector from './LanguageSelector';
import ToggleDarkMode from './ToggleDarkMode';

/**
 *
 * This component renders a navigation bar composed with a auth menu and a language selector and dark mode switch.
 * The component is composing them together and adding some styling and functionality
 *
 */
const Navbar = () => (
  <nav className={`flex h-min w-min justify-end`}>
    <ul
      className={
        'flex items-center content-center relative flex-row justify-end'
      }
    >
      <LanguageSelector />
      <ToggleDarkMode />
    </ul>
  </nav>
);

export default Navbar;

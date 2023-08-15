import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDarkMode } from '../../actions/auth-actions';
import { useSelector } from '../../utils/store';

const ToggleDarkMode = () => {
  const { darkMode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    const newDarkMode = !darkMode;
    dispatch(setDarkMode(newDarkMode));
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      dispatch(setDarkMode(savedTheme === 'true'));
    } else if (systemTheme) {
      dispatch(setDarkMode(true)); // User prefers dark mode
    } else {
      dispatch(setDarkMode(false)); // User prefers light mode
    }
  }, []);

  // Add or remove the dark class depending on the dark mode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onChange={handleToggleDarkMode}
      className={`${
        darkMode ? 'bg-zinc-300 ring-zinc-100' : 'bg-zinc-600 ring-zinc-900/20'
      } ring-1 relative inline-flex h-7 w-[52px] items-center rounded-full ml-3`}
    >
      <span className={'sr-only'}>Switch color Mode</span>
      <span
        className={`${
          darkMode ? 'translate-x-1' : 'translate-x-6'
        } inline-block bg-orange-700 h-6 w-6 transform rounded-full transition p-1`}
      >
        {darkMode ? (
          <MoonIcon className="fill-white rounded-full" />
        ) : (
          <SunIcon className="fill-white rounded-full" />
        )}
      </span>
    </Switch>
  );
};

export default ToggleDarkMode;

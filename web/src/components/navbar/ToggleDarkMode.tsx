import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setDarkMode } from '../../actions/auth-actions';
import { useSelector } from '../../utils/store';

const ToggleDarkMode = () => {
  const { darkMode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Check the system preference when the component mounts
  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    dispatch(setDarkMode(systemTheme));
  }, []);

  // Handle the switch toggle by dispatching the setDarkMode action
  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

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
      onChange={handleDarkMode}
      className={`${
        darkMode ? 'bg-zinc-100 ring-zinc-100' : 'bg-zinc-900 ring-zinc-900/20'
      } ring-1 relative inline-flex h-6 w-12 items-center rounded-full ml-3`}
    >
      <span className={'sr-only'}>Switch color Mode</span>
      <span
        className={`${
          darkMode ? 'translate-x-6 bg-zinc-700' : 'translate-x-1 bg-zinc-100'
        } inline-block h-5 w-5 transform rounded-full transition`}
      >
        {darkMode ? <MoonIcon className={'stroke-zinc-100'} /> : <SunIcon />}
      </span>
    </Switch>
  );
};

export default ToggleDarkMode;

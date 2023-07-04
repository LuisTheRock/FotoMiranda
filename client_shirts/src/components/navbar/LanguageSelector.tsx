import { Popover, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import { languagesOption } from '../../data/Constants';
import i18n from '../../i18n';
import { layout } from '../../style';

interface ILanguageSelector {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
  currentColor?: string;
}

/**
 ** This component is responsible for selecting the language that the user pretend to use on the website
 ** It´s primary responsibility is to render a language selector dropdown
 */
const LanguageSelector = ({
  isToggle,
  onAuthIconChange,
  currentColor,
}: ILanguageSelector) => {
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    onAuthIconChange(false);
  };

  const handleChildToggle = () => {
    const newChildState = !isToggle;
    onAuthIconChange(newChildState);
  };

  return (
    <Popover className={'relative'}>
      <Popover.Button className={`${layout.buttonInOut}`}>
        <GlobeAltIcon className={'w-5 h-5'} onClick={handleChildToggle} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter={'transition ease-out duration-200'}
        enterFrom={'opacity-0 translate-y-1'}
        enterTo={'opacity-100 translate-y-0'}
        leave={'transition ease-in duration-150'}
        leaveFrom={'opacity-100 translate-y-0'}
        leaveTo={'opacity-0 translate-y-1'}
      >
        <Popover.Panel
          className={'absolute z-50 mt-5 max-w-sm -translate-x-full transform'}
          static
        >
          <div
            className={'relative flex rounded-lg p-2 bg-stone-800 text-white'}
          >
            <ul className={'list-none'}>
              {languagesOption.map(({ language, name }, index) => (
                <li className={'mb-2'} key={index}>
                  <button
                    className={'flex items-center px-2 py-1'}
                    onClick={() => handleLanguageChange(language)}
                  >
                    <span className={'mr-2 w-5'}>
                      <GlobeAltIcon />
                    </span>
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default LanguageSelector;

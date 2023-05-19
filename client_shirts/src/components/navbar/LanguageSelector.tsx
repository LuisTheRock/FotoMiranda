import { Popover, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import { languagesOption } from '../../data/Constants';
import i18n from '../../i18n';
import { layout } from '../../style';

interface ILanguageSelector {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
}

/**
 ** This component is responsible for selecting the language that the user pretend to use on the website
 ** It´s primary responsibility is to render a language selector dropdown
 */
const LanguageSelector = ({
  isToggle,
  onAuthIconChange,
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
    <Popover className={'flex relative max-w-sm md:pl-2 p-2'}>
      <Popover.Button
        className={`${layout.buttonInOut} flex items-end`}
        onClick={handleChildToggle}
      >
        <GlobeAltIcon className={'w-5 h-5 stroke-black stroke-1'} />
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
          className={
            'absolute flex left-1/2 z-10 mt-10 max-w-sm -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-3xl'
          }
        >
          <div className="overflow-hidden flex rounded-lg shadow-lg ring-1 ring-black ring-opacity-50">
            <div className={'relative bg-white p-4'}>
              {languagesOption.map(({ language, name }, index) => (
                <button
                  key={index}
                  onClick={() => handleLanguageChange(language)}
                  className={
                    '-m-3 flex p-3 hover:bg-neutral-200 hover:rounded-md items-center text-center'
                  }
                >
                  <div className={'h-5 w-5'}>
                    <GlobeAltIcon />
                  </div>
                  <div className={'ml-4'}>
                    <p className={'font-poppins'}>{name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default LanguageSelector;

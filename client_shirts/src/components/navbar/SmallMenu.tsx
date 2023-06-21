import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { t } from 'i18next';
import { Fragment } from 'react';

import { routesNavbar } from '../../data/Constants';
import { layout } from '../../style';

interface ISmallMenu {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
  currentColor: string;
}

const SmallMenu = ({
  isToggle,
  onAuthIconChange,
  currentColor,
}: ISmallMenu) => {
  const handleChildToggle = () => {
    const newChildState = !isToggle;
    onAuthIconChange(newChildState);
  };

  return (
    <Popover className={'md:px-6 p-2'}>
      <Popover.Button
        onClick={handleChildToggle}
        className={`flex items-center ${layout.buttonInOut}`}
      >
        <Bars3Icon className={` w-5 h-5 stroke-1 stroke-${currentColor}`} />
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
            'absolute z-10 mt-5 max-w-sm -translate-x-3/4 transform px-2'
          }
        >
          <div className="overflow-hidden flex rounded-lg shadow-lg ring-1 ring-black ring-opacity-50">
            <div className={'relative bg-white p-2'}>
              {routesNavbar.map((nav, index) => (
                <ul
                  className={'p-2 hover:bg-neutral-200 hover:rounded-lg'}
                  key={index}
                >
                  <li>
                    <a onClick={handleChildToggle} href={`#${nav.id}`}>
                      {t(`${nav.idTranslate}`)}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default SmallMenu;

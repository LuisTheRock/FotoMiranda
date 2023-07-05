import { Popover, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import CustomFormik from '../forms/CustomFormik';
import FormFieldsGenerator from '../forms/FormFieldsGenerator';
import Album from '../../data/Album';
import { Login } from '../../data/hooks/useLogin';
import { layout } from '../../style';

interface IAuthIcon {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
  currentColor?: string;
}

const AuthIcon = ({ isToggle, onAuthIconChange, currentColor }: IAuthIcon) => {
  const { GetLoginFields } = FormFieldsGenerator();
  const { mutate } = Login();

  const handleSubmit = (data: any) => {
    let album: Album;

    album = new Album(data.albumName, data.albumPassword);

    mutate(album);
  };

  const handleChildToggle = () => {
    const newChildState = !isToggle;
    onAuthIconChange(newChildState);
  };

  return (
    <Popover className={'mx-3 relative'}>
      <Popover.Button className={`${layout.buttonInOut}`}>
        <UserIcon
          onClick={handleChildToggle}
          className={`stroke-zinc-800 dark:stroke-zinc-100 w-5 h-5`}
        />
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
          className={'z-50 absolute mt-5 max-w-sm -translate-x-3/4 transform'}
        >
          <div
            className={'relative p-2 flex rounded-lg shadow-lg bg-stone-800'}
          >
            <div className={'relative p-2'}>
              <CustomFormik
                onSubmit={handleSubmit}
                functionToUse={GetLoginFields}
              />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default AuthIcon;

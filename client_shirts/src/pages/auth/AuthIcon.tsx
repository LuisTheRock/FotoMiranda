import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import Album from '../../data/Album';
import { Login } from '../../data/hooks/useLogin';
import { layout } from '../../style';

interface IAuthIcon {
  isToggle: boolean;
  onAuthIconChange: (authIconState: boolean) => void;
}

const AuthIcon = ({ isToggle, onAuthIconChange }: IAuthIcon) => {
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
    <Popover className={'md:px-6 p-2'}>
      <Popover.Button className={`flex items-end ${layout.buttonInOut}`}>
        <UserIcon onClick={handleChildToggle} className={'stroke-1 w-5 h-5'} />
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
            'absolute z-10  mt-5 max-w-sm -translate-x-3/4 transform px-2'
          }
        >
          <div className="overflow-hidden flex rounded-lg shadow-lg ring-1 ring-black ring-opacity-50">
            <div className={'relative bg-white p-2'}>
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

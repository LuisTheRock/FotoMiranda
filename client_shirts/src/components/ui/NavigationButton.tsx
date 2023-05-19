import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

type NavigationButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

const NavigationButton = memo(
  ({ direction, onClick }: NavigationButtonProps) => {
    return (
      <button
        className={
          'bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none transition ease-in duration-200'
        }
        onClick={onClick}
      >
        {direction === 'left' ? (
          <ChevronLeftIcon
            className={'w-6 h-6 md:w-8 md:h-8 stroke-white stroke-2'}
          />
        ) : (
          <ChevronRightIcon
            className={'w-6 h-6 md:w-8 md:h-8 stroke-white stroke-2'}
          />
        )}
      </button>
    );
  }
);

export default NavigationButton;

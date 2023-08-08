import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

type NavigationButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

const NavigationButton = memo(
  ({ direction, onClick }: NavigationButtonProps) => {
    return (
      <a onClick={onClick}>
        {direction === 'left' ? (
          <ChevronLeftIcon
            className={'w-6 h-6 md:w-8 md:h-8 stroke-white stroke-2'}
          />
        ) : (
          <ChevronRightIcon
            className={'w-6 h-6 md:w-8 md:h-8 stroke-white stroke-2'}
          />
        )}
      </a>
    );
  }
);

export default NavigationButton;

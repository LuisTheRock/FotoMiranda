import { XMarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

import CarouselBackend from '../../components/ui/CarouselBackend';
import { GetAlbumProfileInfo } from '../../data/hooks/useAlbumProfile';

export interface ICardAlbum {
  id: number;
  onClose: () => void;
}

const SeeAlbum = ({ onClose, id }: ICardAlbum) => {
  const { status, error, data } = GetAlbumProfileInfo(Number(id));

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') {
    return <div>{toast.error(JSON.stringify(error).replaceAll('"', ''))}</div>;
  }

  return (
    <div
      className={
        'absolute flex flex-col gap-2 z-50 bg-pallid-green justify-center top-10 right-1/4 w-2/4 p-2 ring-1 ring-black rounded-md'
      }
    >
      <XMarkIcon
        onClick={onClose}
        className={'w-5 h-5 stroke-white stroke-2 bg-red-600 cursor-pointer'}
      />
      <CarouselBackend {...data} />
    </div>
  );
};

export default SeeAlbum;

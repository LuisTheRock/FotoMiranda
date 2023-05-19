import toast from 'react-hot-toast';

import CarouselBackend from '../../components/ui/CarouselBackend';
import { GetAlbumProfileInfo } from '../../data/hooks/useAlbumProfile';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
        'absolute bg-white justify-center mx-1 md:top-11 top-20 md:right-1/4 right-0 md:w-2/4 w-fit p-2 border-[1px] border-black rounded-md overflow-hidden'
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

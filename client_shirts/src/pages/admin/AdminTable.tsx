import { lazy, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CustomToaster } from '../../components/CustomToaster';
import { EntityTypes } from '../../data/EntityTypes';
import { DeleteAlbum } from '../../data/hooks/useDeleteAlbum';
import { GetAllAlbums } from '../../data/hooks/useGetAllAlbums';
import IAllAlbums from '../../interfaces/hooks/IAllAlbums';
import { FormatDate } from '../../utils/formatDate';

interface IAlbumTableProps {
  onClickButton: (id: number) => void;
}

const AdminTable = ({ onClickButton }: IAlbumTableProps) => {
  const { data, status } = GetAllAlbums();
  const { mutate } = DeleteAlbum();
  const { t } = useTranslation();
  // const [formatDate, setFormatDate] = useState<(date: string) => string>(
  //   () => () => ''
  // );

  // useEffect(() => {
  //   import('../../utils/formatDate').then(({ FormatDate }) => {
  //     setFormatDate(() => FormatDate);
  //   });
  // }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const handleClick = (id: number) => {
    onClickButton(id);
  };

  return (
    <section className={'flex flex-col gap-10'}>
      <h1 className={'text-4xl text-center font-Dosis font-light'}>
        {t('labelAlbums')}
      </h1>

      <table
        className={
          'table-auto w-full border-separate border-spacing-y-4 border-spacing-x-10 ring-1 ring-secondary text-secondary rounded-xl'
        }
      >
        <thead>
          <tr>
            <th className={'border-b-[3px] border-coral'}>
              {t('tableLabelName')}
            </th>
            <th className={'border-b-[3px] border-coral'}>
              {t('tableLabelFunction')}
            </th>
            <th className={'hidden md:table-cell border-b-[3px] border-coral'}>
              {t('tableLabelCreatedAt')}
            </th>
            <th className={'border-b-[3px] border-coral'}>
              {t('tableLabelActions')}
            </th>
          </tr>
        </thead>
        <tbody className={'font-Montserrat text-sm'}>
          {data.map((album: IAllAlbums) => (
            <tr key={album.id} className={'text-center'}>
              <td className={'border-b-[1px] border-secondary'}>
                {album.albumName}
              </td>
              <td className={'border-b-[1px] border-secondary'}>
                {album.role}
              </td>
              <td
                className={
                  'hidden md:table-cell border-b-[1px] border-secondary'
                }
              >
                {FormatDate(album.createdAt)}
                {/* {formatDate && formatDate(album.createdAt)} */}
              </td>
              {album.role !== EntityTypes.Admin && (
                <td
                  className={
                    'border-b-[1px] border-secondary flex flex-col gap-2'
                  }
                >
                  <button
                    onClick={() => handleClick(album.id)}
                    className={
                      'p-2 bg-green/60 ring-1 ring-slate-700 w-full rounded-lg'
                    }
                  >
                    {t('labelSeeAlbum')}
                  </button>
                  <button
                    onClick={() => mutate(album.id)}
                    className={
                      'p-2 bg-red-700/60 mb-1 ring-1 ring-slate-700 w-full rounded-lg'
                    }
                  >
                    {t('labelRemoveAlbum')}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <CustomToaster />
    </section>
  );
};

export default AdminTable;

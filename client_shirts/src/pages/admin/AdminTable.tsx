import { Suspense, lazy, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CustomToaster } from '../../components/CustomToaster';
import TitleSection from '../../components/ui/TitleSection';
import { DeleteAlbum } from '../../data/hooks/useDeleteAlbum';
import { GetAllAlbums } from '../../data/hooks/useGetAllAlbums';
import IAllAlbums from '../../interfaces/hooks/IAllAlbums';

interface IAlbumTableProps {
  onClickButton: (id: number) => void;
}

const AdminTable = ({ onClickButton }: IAlbumTableProps) => {
  const { data, status } = GetAllAlbums();
  const { mutate } = DeleteAlbum();
  const { t } = useTranslation();
  const [formatDate, setFormatDate] = useState<(date: string) => string>(
    () => () => ''
  );

  console.log(data);

  useEffect(() => {
    import('../../utils/formatDate').then(({ FormatDate }) => {
      setFormatDate(() => FormatDate);
    });
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const handleClick = (id: number) => {
    onClickButton(id);
  };

  return (
    <div>
      <TitleSection
        title={t('labelAlbums')}
        titleHeight_Font={'text-5xl text-center font-Montserrat font-light'}
      />

      <table
        className={
          'table-auto w-full border-separate border-spacing-y-4 border-spacing-x-10 border-2 text-secondary border-secondary'
        }
      >
        <thead>
          <tr>
            <th className={'border-b-4 border-coral'}>{t('tableLabelName')}</th>
            <th className={'border-b-4 border-coral'}>
              {t('tableLabelFunction')}
            </th>
            <th className={'hidden md:table-cell border-b-4 border-coral'}>
              {t('tableLabelCreatedAt')}
            </th>
            <th className={'border-b-4 border-coral'}>
              {t('tableLabelActions')}
            </th>
          </tr>
        </thead>
        <tbody>
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
                {/* {FormatDate(album.createdAt)} */}
                {formatDate && formatDate(album.createdAt)}
              </td>
              {album.role !== 'admin' && (
                <td className={'border-b-[1px] border-secondary'}>
                  <button
                    onClick={() => handleClick(album.id)}
                    className={'p-2 bg-yellow-600 m-1'}
                  >
                    {t('labelSeeAlbum')}
                  </button>
                  <button
                    onClick={() => mutate(album.id)}
                    className={'p-2 bg-red-600 m-1'}
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
    </div>
  );
};

export default AdminTable;

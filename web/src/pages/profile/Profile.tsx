import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import CarouselBackend from '../../components/ui/CarouselBackend';
import { GetAlbumProfileInfo } from '../../data/hooks/useAlbumProfile';
import { RootState } from '../../utils/store';

const Profile = () => {
  const { id } = useParams();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { status, data } = GetAlbumProfileInfo(Number(id));
  const { t } = useTranslation();

  if (status === 'loading') return <h1>Loading...</h1>;

  return (
    <section
      className={
        'md:px-24 md:py-10 px-5 py-10 flex flex-col gap-10 bg-zinc-100 dark:bg-zinc-800'
      }
    >
      <Header />
      {isAuth ? (
        <main className={'flex flex-col gap-10'}>
          <h1
            className={
              'text-4xl font-Dosis font-light text-zinc-900 dark:text-zinc-100'
            }
          >
            {t('labelWelcome')}: {data.albumName}
          </h1>
          <section>
            <CarouselBackend {...data} />
          </section>
        </main>
      ) : null}
      <Footer />
      <CustomToaster />
    </section>
  );
};

export default Profile;

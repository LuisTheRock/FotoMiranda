import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import Navbar from '../../components/navbar/Navbar';
import CarouselBackend from '../../components/ui/CarouselBackend';
import { GetAlbumProfileInfo } from '../../data/hooks/useAlbumProfile';
import { RootState } from '../../utils/store';

const Profile = () => {
  const { id } = useParams();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { status, data } = GetAlbumProfileInfo(Number(id));

  if (status === 'loading') return <h1>Loading...</h1>;

  return (
    <>
      <Navbar />
      {isAuth ? (
        <>
          <h1 className={'text-4xl font-Montserrat'}>
            {t('labelWelcome')}: {data.albumName}
          </h1>
          <section>
            <div
              className={'md:col-start-3 md:col-end-11 col-start-1 col-end-13'}
            >
              <CarouselBackend {...data} />
            </div>
          </section>
        </>
      ) : (
        <div>Error</div>
      )}
      <Footer />
      <CustomToaster />
    </>
  );
};

export default Profile;

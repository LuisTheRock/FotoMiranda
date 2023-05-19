import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import CarouselBackend from '../../components/ui/CarouselBackend';
import Section from '../../components/ui/Section';
import TitleSection from '../../components/ui/TitleSection';
import { GetAlbumProfileInfo } from '../../data/hooks/useAlbumProfile';
import { RootState } from '../../utils/store';

const Profile = () => {
  const { id } = useParams();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { status, data } = GetAlbumProfileInfo(Number(id));

  if (status === 'loading') return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      {isAuth ? (
        <>
          <TitleSection
            title={`${t('labelWelcome')}: ${data.albumName}`}
            titleHeight_Font={'text-4xl font-Montserrat'}
          />
          <Section>
            <div
              className={'md:col-start-3 md:col-end-11 col-start-1 col-end-13'}
            >
              <CarouselBackend {...data} />
            </div>
          </Section>
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

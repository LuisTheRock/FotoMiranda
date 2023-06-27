import { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import styles from '../../style';
import { RootState } from '../../utils/store';
import AddAlbum from './AddAlbum';
import AdminTable from './AdminTable';

const SeeAlbum = lazy(() => import('./SeeAlbum'));

const AdminHome = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const [id, setId] = useState<number>();
  const [showCard, setShowCard] = useState(false);
  const { t } = useTranslation();

  const displayInfo = (id: number) => {
    setId(id);
    setShowCard(true);
  };

  return (
    <div>
      <Header />
      <section className={'mb-16'}>
        {isAuth && (
          <main>
            <div className={`${styles.colStart} md:col-end-7 col-end-13`}>
              <AdminTable onClickButton={displayInfo} />
            </div>
            <div
              className={`md:col-start-8 col-start-1 ${styles.colEnd} md:py-0 py-4`}
            >
              <h1
                className={`text-5xl text-center font-Montserrat font-light ${styles.paddingTitleY}`}
              >
                {t('registAlbum')}
              </h1>
              <AddAlbum />
            </div>
          </main>
        )}
      </section>
      {showCard ? (
        <SeeAlbum id={id!} onClose={() => setShowCard(false)} />
      ) : null}
      <CustomToaster />
      <Footer />
    </div>
  );
};

export default AdminHome;

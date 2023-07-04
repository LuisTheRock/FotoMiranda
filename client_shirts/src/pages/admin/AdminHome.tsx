import { lazy, useState } from 'react';
import { useSelector } from 'react-redux';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import { RootState } from '../../utils/store';
import AddAlbum from './AddAlbum';
import AdminTable from './AdminTable';

const SeeAlbum = lazy(() => import('./SeeAlbum'));

const AdminHome = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const [id, setId] = useState<number>();
  const [showCard, setShowCard] = useState(false);

  const displayInfo = (id: number) => {
    setId(id);
    setShowCard(true);
  };

  return (
    <section className={'md:p-24 px-5 py-10'}>
      <Header />
      <main className={'mt-10'}>
        {isAuth && (
          <main className={'flex md:flex-row flex-col justify-between gap-10'}>
            <AdminTable onClickButton={displayInfo} />
            <AddAlbum />
          </main>
        )}
      </main>
      {showCard ? (
        <SeeAlbum id={id!} onClose={() => setShowCard(false)} />
      ) : null}
      <CustomToaster />
      <Footer />
    </section>
  );
};

export default AdminHome;

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
    <div className={'flex h-full flex-col bg-zinc-50 dark:bg-black'}>
      <div className={'fixed inset-0 flex justify-center sm:px-8'}>
        <div className={'flex w-full max-w-7xl lg:px-8'}>
          <div
            className={
              'w-full ring-1 bg-white ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'
            }
          />
        </div>
      </div>
      <div className={'relative'}>
        <Header />
        <main className={'mt-10'}>
          {isAuth && (
            <main>
              <section className={'sm:px-8 mt-9 flex'}>
                <div className={'mx-auto max-w-7xl lg:px-8'}>
                  <div className={'relative px-4 sm:px-8 lg:px-12'}>
                    <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
                      <div
                        className={
                          'mx-w-2xl flex md:flex-row flex-col items-center gap-24 relative'
                        }
                      >
                        <AdminTable onClickButton={displayInfo} />
                        <AddAlbum />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          )}
        </main>
        {showCard ? (
          <SeeAlbum id={id!} onClose={() => setShowCard(false)} />
        ) : null}
        <Footer />
      </div>
      <CustomToaster />
    </div>
  );
};

export default AdminHome;

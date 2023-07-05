import { Outlet } from 'react-router';

import { Footer } from './components/Footer';
import Header from './components/Header';
import About from './pages/aboutCompany/About';
import Team from './pages/aboutCompany/Team';
import Contacts from './pages/contacts/Contacts';
import ReachUs from './pages/contacts/ReachUs';
import Home from './pages/Home';
import ImagesDisplay from './pages/portfolio/ImagesDisplay';
import Quote from './pages/Quote';

const App = () => (
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
      <main>
        <Home />
        <Outlet />
        <Quote />
        <ImagesDisplay />
        <section className={'sm:px-8 mt-24 md:mt-28'}>
          <div className={'mx-auto max-w-7xl lg:px-8'}>
            <div className={'relative px-4 sm:px-8 lg:px-12'}>
              <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
                <div
                  className={
                    'mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'
                  }
                >
                  <div className={'flex flex-col gap-16'}>
                    <About />
                    <Contacts />
                  </div>
                  <div className={'space-y-10 lg:pl-16 xl:pl-24'}>
                    <ReachUs />
                    <Team />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
);

export default App;

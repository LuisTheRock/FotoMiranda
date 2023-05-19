import { Outlet } from 'react-router';

import { Footer } from './components/Footer';
import Header from './components/Header';
import About from './pages/aboutCompany/About';
import Contacts from './pages/contacts/Contacts';
import Portfolio2 from './pages/portfolio/Portfolio2';
import VideosPage from './pages/VideosPage';

const App = () => (
  <div className={`w-full`}>
    <Header />
    <Outlet />
    <About />
    <VideosPage />
    <Portfolio2 />
    <Contacts />
    <Footer />
  </div>
);

export default App;

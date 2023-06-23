import { Outlet } from 'react-router';

import { Footer } from './components/Footer';
import Header from './components/Header';
import About from './pages/aboutCompany/About';
import Contacts from './pages/contacts/Contacts';
import Portfolio2 from './pages/portfolio/Portfolio2';
import VideosPage from './pages/VideosPage';
import ImagesDisplay from './pages/ImagesDisplay';
import ReachUs from './pages/contacts/ReachUs';
import Team from './pages/aboutCompany/Team';
import Quote from './pages/Quote';

const App = () => (
  <div className={`w-full bg-gradient-to-b from-white to-stone-400`}>
    <Header />
    <Outlet />
    <Quote />
    <ImagesDisplay />
    <Portfolio2 />
    <Team />
    <About />
    <Contacts />
    <ReachUs />
    <Footer />
  </div>
);

export default App;

import { Outlet } from 'react-router';

import { Footer } from './components/Footer';
import About from './pages/aboutCompany/About';
import Team from './pages/aboutCompany/Team';
import Contacts from './pages/contacts/Contacts';
import ReachUs from './pages/contacts/ReachUs';
import Home from './pages/Home';
import ImagesDisplay from './pages/ImagesDisplay';
import Quote from './pages/Quote';

const App = () => (
  <div className={'bg-gradient-to-b from-white to-stone-400'}>
    {/* <Header /> */}
    <Home />
    <Outlet />
    <Quote />
    <ImagesDisplay />
    <Team />
    <About />
    <Contacts />
    <ReachUs />
    <Footer />
  </div>
);

export default App;

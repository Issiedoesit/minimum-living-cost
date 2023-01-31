import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Landlord from './components/Landlord/Landlord';
import Tenants from './components/Tenants/Tenants';
import Error from './components/Error';
import ScrollProgress from './ScrollProgress';
import useNavStore from './customHooks/useNavStore';







function App() {

  const navOpen = useNavStore(state=> state.isNavOpen)
  
  return (
    <div className={`App ${navOpen && 'overflow-y-hidden max-h-screen' }`}>
      <ScrollProgress />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/landlord" element={<Landlord />}></Route>
          <Route path="/tenants" element={<Tenants />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Landloard from './components/Landloard/Landloard';
import Tenants from './components/Tenants/Tenants';
import Error from './components/Error';






function App() {
  return (
    <div className="App">
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/landloard" element={<Landloard />}></Route>
          <Route path="/tenants" element={<Tenants />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </div>
  );
}

export default App;


  import './App.css';

import "./gypsy/gypsy.css";
import Home from './gypsy/Home';
import About from './gypsy/About';
// import Services from './gypsy/Services';
// import Contacts from './gypsy/Contacts';
// import NoPage from './gypsy/NoPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default App;

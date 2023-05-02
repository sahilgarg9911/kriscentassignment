import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';




function App() {
  return (
  
<BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

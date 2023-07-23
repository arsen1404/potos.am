import { Route, Router, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/homepage/Home';
import Contact from './component/contact/Contact'
import About from './component/about/About'
import Slider from './component/slider/Slider';

function App() {

  return (
    <>
    <Header/>
   
      
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/contact' element={<Contact />}  />
          <Route path='/slider' element={<Slider />}  />
        </Routes>
  
    </>
  );
}

export default App;

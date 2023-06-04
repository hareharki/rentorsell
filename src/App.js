import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Gap from './pages/Gap';
import Lac from './pages/Lac';
import RealEstates from './pages/RealEstates';
import Home from './pages/Home';
import { Footer } from './components/Footer';

function App(){
      return(
        <>
      <Navbar/>
      <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/realestates' element={<RealEstates/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/gap' element={<Gap/>}/>
        <Route path='lac' element={<Lac/>}/>
      </Routes>
        </div>
        <Footer/>     
      </>
      );
       }

export default App;

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Auth from './Auth';
// import party from "party-js";
import Pillarbar from './Components/Pillarbar';
import Footer from './Footer';
import About from './Components/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PillarNav from './Components/Nav';

function App() {

      //const {name, age}=myObjects;
  return (
  <div>
    <div className="App">
        <div className=''>
          <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Pillarbar/>}/>
              <Route exact path='/about' element={<About/>}/>
            </Routes>
          </BrowserRouter>
            <Auth/>
            <Footer/>
    
      
        </div> 
    </div>
  </div>
  );
}

export default App;

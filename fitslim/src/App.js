import './App.css';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Header from './components/Header/Header';
import About from './components/About/About';
import Plans from './components/Gyms/Gyms';
import Nutrition from './components/Nutritian/Nutritian'
import Gyms from './components/Gyms/Gyms'
import Partner from './components/Partner/Partner';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer'
// import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element ={<Hero/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path='/plans' element={<Plans />}/>
          <Route path='/about-us' element={<About />}/>
          <Route path='/nutrition' element={<Nutrition />}/>
          <Route path='/gyms' element={<Gyms />}/>
          <Route path='/partner' element={<Partner />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Hero/>}/></Routes>
          <Footer/>

      </BrowserRouter>

      {/* <Signup/> */}
    </div>
  );
}

export default App;

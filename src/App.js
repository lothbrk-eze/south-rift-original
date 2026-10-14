
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Signincomponent from './components/Signincomponent';
import Signupcomponent from './components/Signupcomponent';
import ChatBot from './components/Chatbot';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import Mpesapaymentcomponent from './components/Mpesapaymentcomponent';

import Gallery from './components/Gallery';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';

import AircraftPage from './components/Customer';
import Addappliance from './components/addappliance';
import Addelectronic from './components/addelectronic';
import Addkitchen from './components/addkitchen';
import Addstationery from './components/addstationery';
import Addclothes from './components/addclothes';
import Home2 from './components/Home2';
import Getproducts2 from './components/Getproducts2';
import Contactus2 from './components/Contactus2';
import Navbar2 from './components/Navbar2';
import Aboutus2 from './components/Aboutus2';

function App() {
  return (
  

<Router>
    <Navbar/>
    
    {/* ADVERTISING MARQUEE */}
   
    
    
    <ChatBot/>
      
  
    <div className="App">
    

      



  <Routes>
     <Route path='/Signup' element={<Signupcomponent/>} />
      <Route path='/Signin' element={<Signincomponent/>}/>
    
      <Route path='*' element={<Notfound/>} />
      <Route path='/navbar' element={<Navbar/>} />
      <Route path='/makepayment' element={<Mpesapaymentcomponent/>} />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/About' element={<Aboutus/>} />
      <Route path='/Contactus'element={<Contactus/>} />
      
      
      <Route path='/chatbot' element={<ChatBot/>} />
      <Route path='/customerpage' element={<AircraftPage/>} />
      <Route path='/addappliance' element={<Addappliance/>} />
      <Route path='/addelectronic' element={<Addelectronic/>} />
      <Route path='/addkitchen' element={<Addkitchen/>} />
      <Route path='/addstationery' element={<Addstationery/>} />
      
      <Route path='/addclothes' element={<Addclothes/>} />
      <Route path='/' element={<Home2/>} />
      <Route path='/Getproducts2' element={<Getproducts2/>} />
      <Route path='/Contactus2' element={<Contactus2/>} />
      <Route path='/Navbar2' element={<Navbar2/>} />
      <Route path='/Aboutus2' element={<Aboutus2/>} />



      
 


  </Routes>


     
  </div>
</Router>
  );
}

export default App;

import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import Detail from './components/product-des';
import Contact from './components/contact';
import Brochure from './components/brochure';
import { Route, Routes} from 'react-router-dom';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Navbar/>,<Footer/>}/>
          <Route index element={<Home />} />
          <Route path="/products" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/brochure" element={<Brochure/>}/>
    </Routes>
    <Footer/> 
      </>
    )
  };
};
export default App;

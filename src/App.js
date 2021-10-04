import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import Notfound from './Components/Notfound/Notfound';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route path="/home">
                 <Home/>
            </Route>
            <Route path="/about">
                 <About/>
            </Route>
            <Route path="/services">
                 <Service/>
            </Route>
            <Route path="/contact">
                 <Contact/>
            </Route>
            <Route>
                 <Notfound/>
            </Route>
        </Switch>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;

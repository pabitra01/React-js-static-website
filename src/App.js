import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <div className="App">
      <Nav/>
        
    <Routes>
      <Route path="/">
        
        <Page1/>
      </Route>
      <Route path="/page1">
       
        <Page1/>
        
      </Route>
      <Route path="/page2" >
       
        <Page2/>
        
      </Route>
      <Route path="/page3">
     
        <Page3/>
      </Route>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;

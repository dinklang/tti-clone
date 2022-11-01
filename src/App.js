import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Engineering from './Components/Engineering';
import Services from './Components/Services';
import Footer from './Components/Footer';
import CTA from './Components/CTA';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <About></About>
      <Engineering></Engineering>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}

export default App;

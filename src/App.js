import './App.css';
import Navbar from './components/navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar search={false}/>
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;

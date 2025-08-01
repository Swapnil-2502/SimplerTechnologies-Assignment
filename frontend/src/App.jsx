import './App.css'
import Navbar from './components/Navbar';
import SignUp from './components/Signup'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  
  return (
   <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </>
  )
}

export default App

import './App.css'
import SignUp from './components/Signup'
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
   <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
   </>
  )
}

export default App

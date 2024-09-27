import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Verification from './components/Verification';
import SetPin from './components/SetPin';
import ConfirmPin from './components/ConfirmPin';

import './App.css';

function App() {
  return (
    <>
     <Router>
    <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/verify' element={<Verification />} />
       <Route path='/setpin' element={<SetPin />} />
       <Route path='/confirmpin' element={<ConfirmPin />} />
       <Route path="*" element={<Navigate to="/" />} />
    </Routes>
 </Router>
    </>
  );
}

export default App;

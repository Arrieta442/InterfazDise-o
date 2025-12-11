import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Principal from './pages/principal';
import Recepcion from './pages/recepcion';
import Almacenamiento from './pages/Almacenamiento';
import Dispensa from './pages/Dispensa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/recepcion" element={<Recepcion />} />
        <Route path="/Almacenamiento" element={<Almacenamiento />} />
        <Route path="/Dispensa" element={<Dispensa />} />
    </Routes>
    </Router>
  );
}

export default App;
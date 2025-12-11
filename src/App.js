import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Recepcion from './pages/recepcion';
import Almacenamiento from './pages/Almacenamiento';
import Dispensa from './pages/Dispensa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recepcion" element={<Recepcion />} />
        <Route path="/Almacenamiento" element={<Almacenamiento />} />
        <Route path="/Dispensa" element={<Dispensa />} />
    </Routes>
    </Router>
  );
}

export default App;
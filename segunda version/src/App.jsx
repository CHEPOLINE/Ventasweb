import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientView from './components/ClientView';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal - Vista de cliente directa */}
        <Route path="/" element={<ClientView />} />
        
        {/* Ruta de administrador - Con login */}
        <Route path="/admin" element={<AdminLogin />} />
        
        {/* Ruta por defecto - Redirige a inicio */}
        <Route path="*" element={<ClientView />} />
      </Routes>
    </Router>
  );
}

export default App;
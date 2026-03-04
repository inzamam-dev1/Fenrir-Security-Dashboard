import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ScanDetail from './pages/ScanDetail';

/**
 * R2: The three screens are connected through logical navigation.
 * R6: The application opens to the Login screen by default.
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Default entry point: Screen 1 - Login/Sign-up [cite: 6, 88] */}
          <Route path="/" element={<Signup />} />
          
          {/* Main Application Area: Screen 2 - Dashboard [cite: 11] */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Detail View: Screen 3 - Active Scan Detail [cite: 12] */}
          <Route path="/scan-detail" element={<ScanDetail />} />
          
          {/* Redirect any unknown paths back to Login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
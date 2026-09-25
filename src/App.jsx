import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Team from './pages/Team';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('ngi-theme') === 'dark');

  const toggleTheme = () => {
    setDarkMode((isDark) => {
      const nextMode = !isDark;
      localStorage.setItem('ngi-theme', nextMode ? 'dark' : 'light');
      return nextMode;
    });
  };

  return (
    <Router>
      <div className={`app${darkMode ? ' dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

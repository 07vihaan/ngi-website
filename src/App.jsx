import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Michigan from './pages/Michigan';
import './App.css';

const THEME_KEY = 'ngi-theme';

// localStorage can throw (private browsing, blocked storage), so guard every access.
function readTheme() {
  try {
    return window.localStorage.getItem(THEME_KEY) === 'dark';
  } catch {
    return false;
  }
}

function saveTheme(isDark) {
  try {
    window.localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  } catch {
    /* storage unavailable: theme just won't persist */
  }
}

// Start each new page at the top (unless the link points at a #section).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(readTheme);

  const toggleTheme = () => {
    setDarkMode((isDark) => {
      const nextMode = !isDark;
      saveTheme(nextMode);
      return nextMode;
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`app${darkMode ? ' dark-mode' : ''}`}>
        <a href="#main" className="skip-to-main">Skip to content</a>
        <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
        <main className="main-content" id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/michigan" element={<Michigan />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

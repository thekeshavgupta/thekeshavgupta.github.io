import { useState, useEffect } from 'react';
import './App.css';
import Container from './components/container';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kg_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kg_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Container theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;

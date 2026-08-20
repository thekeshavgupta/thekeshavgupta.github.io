import { useState, useEffect } from 'react';
import './App.css';
import Container from './components/container';

function App() {
  // Dark mode disabled for now — always use light theme
  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem('kg_theme') || 'light';
  // });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // localStorage.setItem('kg_theme', theme);
    localStorage.removeItem('kg_theme'); // clear any stale dark preference
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

import { Route, Routes } from 'react-router-dom';
import { Home, About } from '../pages';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import {Themes} from '../themes/index.js';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <ThemeProvider theme={Themes[theme]}>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about-us" element={ <About/> }/>
      </Routes>
    </ThemeProvider>
  );
};


export default App;

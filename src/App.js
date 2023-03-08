import './App.css';
import Header from './components/Header';
import LoginGroup from './components/LoginGroup';
import { GlobalStyle } from './globalStyles/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LoginGroup />
    </>
  );
}

export default App;
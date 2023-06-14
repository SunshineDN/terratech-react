import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import PrivateRoutes from './PrivateRoutes.jsx';
import { Home } from '../pages/Home/Home.jsx';

function App() {

  return (
    <Routes>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route element={ <PrivateRoutes/> }>
        <Route path="/" element={ <Home/> }/>
      </Route>

      <Route path="*" element={ <h1>Not Found</h1> }/>
    </Routes>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Register,
  CollectorRegister,
  Residues,
  Map,
  CuponStore,
  Profile,
  Login,
  Settings,
  News,
  NotFound,
} from '../pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/collector-register" element={ <CollectorRegister/> }/>
      <Route path="/residues" element={ <Residues/> }/>
      <Route path="/map" element={ <Map/> }/>
      <Route path="/cupon-store" element={ <CuponStore/> }/>
      <Route path="/profile" element={ <Profile/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/settings" element={ <Settings/> }/>
      <Route path="/news" element={ <News/> }/>
      <Route path="*" element={ <NotFound/> }/>
    </Routes>
  );
}

export default App;

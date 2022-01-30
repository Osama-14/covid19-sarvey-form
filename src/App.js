import react from 'react';
import Signup from './components/signup/index';
import Login from './components/login/index';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import './App.css';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
      <Routes/>
      </BrowserRouter>

  );
}

export default App;

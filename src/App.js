import react from 'react';
import Index from './components/signup/index';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import './App.css';


function App() {
  return (


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      
      <Routes/>
      </BrowserRouter>
        
  );
}

export default App;

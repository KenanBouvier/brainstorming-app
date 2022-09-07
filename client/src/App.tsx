import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<h1>404 this page does not exist</h1>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav';
import Home from './pages/Home.tsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import FrontEnd from './pages/FrontEnd';
import Database from './pages/Database';
import Network from './pages/Network';
import BackEnd from './pages/BackEnd';
import Album from './pages/Album';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/FrontEnd" element={<FrontEnd />}></Route>
          <Route path="/BackEnd" element={<BackEnd />}></Route>
          <Route path="/Database" element={<Database />}></Route>
          <Route path="/Network" element={<Network />}></Route>
          <Route path="/Project1" element={<Project1 />}></Route>
          <Route path="/Project2" element={<Project2 />}></Route>
          <Route path="/Album" element={<Album />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

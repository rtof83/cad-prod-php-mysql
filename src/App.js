import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import Tag from './pages/tag';
import Prod from './pages/prod';
import Views from './pages/views';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/tag' element={<Tag />} />
        <Route path='/tag/:id/:name' element={<Tag />} />
        <Route path='/prod' element={<Prod />} />
        <Route path='/prod/:id/:name/:tags' element={<Prod />} />
      </Routes>
    </Router>
  );
}

export default App;

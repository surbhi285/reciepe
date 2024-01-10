import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Receipe from './Component/Receipe';
import SearchResult  from './Component/SearchResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Receipe" element={<Receipe />} />
        <Route path="/SearchResult" element={<SearchResult />}/>
      </Routes>
    </Router>
  );
}

export default App;

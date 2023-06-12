import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProblemDetailsPage from './pages/ProblemDetailsPage';
import "./App.css"
import Nav from "./components/Nav"

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/problems/:index/:title" element={<ProblemDetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
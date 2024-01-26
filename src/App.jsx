import React from 'react';
import Quiz from './Components/Quiz/Quiz';
import Page from './Components/MainPage/Page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Page />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

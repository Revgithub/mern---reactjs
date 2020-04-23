import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './routing/router';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Router/>
    </div>
    </BrowserRouter>
  );
}

export default App;

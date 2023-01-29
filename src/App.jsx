import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './containers/pages/Home';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App

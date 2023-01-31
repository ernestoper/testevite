import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './containers/pages/Contact';
import Home from './containers/pages/Home';
import Portfolio from './containers/pages/Portfolio';
import Servicos from './containers/pages/Servicos';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/servicos' element={<Servicos/>}/>
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path='/contato' element={<Contact/>}/>
        
      </Routes>
    </Router>
  )
}

export default App

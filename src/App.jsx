import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import store from './store'
import { Provider } from 'react-redux';
import Portfolio from './containers/pages/Portfolio';
import Servicos from './containers/pages/Servicos';
import Clientes from './containers/pages/Clientes';
import Contato from './containers/pages/Contato';
import Mim from './containers/pages/Mim';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/servicos' element={<Servicos/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
          <Route path='/mim' element={<Mim/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </Router>
    </Provider>

  )
}

export default App

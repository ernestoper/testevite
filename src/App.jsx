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
          <Route exact path='*' element={<Error404/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/portfolio' element={<Portfolio/>}/>
          <Route exact path='/servicos' element={<Servicos/>}/>
          <Route exact path='/clientes' element={<Clientes/>}/>
          <Route exact path='/mim' element={<Mim/>}/>
          <Route exact path='/contato' element={<Contato/>}/>
        </Routes>
      </Router>
    </Provider>

  )
}

export default App

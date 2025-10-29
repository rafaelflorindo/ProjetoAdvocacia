import { BrowserRouter, Routes, Route } from 'react-router-dom';

//npm install react-router-dom

import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import Cadastrar from './componentes/Servicos/Cadastrar';
import DetalheServico from './componentes/Servicos/DetalheServico'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cadastrarServico' element={<Cadastrar />} />
          <Route path = '/listarServico/id' element={<DetalheServico />} />
        </Routes>        
        <Footer /> 
      </>
    </BrowserRouter>
  );
}

export default App;

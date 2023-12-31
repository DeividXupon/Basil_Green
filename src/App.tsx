import React from 'react';

import { GlobalStyle } from './styles/GlobalStyles';
import Header from './Components/Header';
import Cardapio from 'Components/Cardapio';
import Home from 'Components/Home';
import Sobre from 'Components/Sobre';
import Chef from 'Components/Chef';
import Footre from 'Components/footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Cardapio/>
      <Chef/>
      <Sobre/>
      <Footre/>
    </div>
  );
}

export default App;

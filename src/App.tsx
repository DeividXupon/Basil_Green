import React from 'react';

import { GlobalStyle } from './styles/GlobalStyles';
import Header from './Components/Header';
import Cardapio from 'Components/Cardapio';
import Home from 'Components/Home';

function App() {
  return (
    <div className='App'>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Cardapio/>
    </div>
  );
}

export default App;

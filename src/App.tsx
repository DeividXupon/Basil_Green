import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Cardapio from './Components/Cardapio';
import ShowLogo from 'Components/ShowLogo';

function App() {
  return (
    <div className='App'>
      <GlobalStyle/>
      <Cardapio/>
      <ShowLogo/>
    </div>
  );
}

export default App;

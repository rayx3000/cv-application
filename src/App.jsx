import React, { useState, createContext } from 'react';
import Main from "./pages/Main"
import Buttons from './components/Buttons/Buttons';

export const AppContext = createContext();

function App() {
  const [isCvVisible, setIsCvVisible] = useState(false);

  return (
    <AppContext.Provider value={{ isCvVisible, setIsCvVisible }}>
      <Main/>
      <Buttons />
    </AppContext.Provider>
  )
}

export default App

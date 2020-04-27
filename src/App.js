import React from 'react';
import logo from './assets/Lightlogo.svg';
import Header from './components/header';
import GlobalStyle from './styles/global';
import Landing from './pages/landing';
function App() {
  return (
    <>
      <Header />
      <div style={{marginTop:'100px'}}>
        <Landing />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;

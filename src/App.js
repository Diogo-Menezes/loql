import React from 'react';
import logo from './assets/Lightlogo.svg';
import Header from './components/header';
import Footer from './components/footer';
import GlobalStyle from './styles/global';
import Landing from './pages/landing';
function App() {
  return (
    <>
      <Header />
      <Landing />
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default App;

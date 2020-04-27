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
      <div style={{ marginTop: '100px' }}>
        <Landing />
        <GlobalStyle />
      </div>
      <Footer />
    </>
  );
}

export default App;

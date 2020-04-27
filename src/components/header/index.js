import React, { Component } from 'react';
// import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';
import logo from '../../assets/logo-dark.png';

export default class header extends Component {
  render() {
    return (
      <Container>
        {/* <FiMenu/> */}
        <img src={logo} alt='logo' />
        <div>
          <a href='/'>
            <span>Home</span>
          </a>

          <a href='/about'>
            <span>About </span>
          </a>

          <a href='/join'>
            <span>Join us </span>
          </a>
        </div>
        <a href='/register'>Register</a>
      </Container>
    );
  }
}

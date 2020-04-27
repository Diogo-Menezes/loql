import React, { Component } from 'react';
// import { FiMenu } from 'react-icons/fi';

import { Container, Fill } from './styles';
import logo from '../../assets/logo-dark.png';

export default class header extends Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <img src={logo} alt='logo' />
            <menu>
              <a href='/'>
                <span>Home</span>
              </a>

              <a href='/about'>
                <span>About </span>
              </a>

              <a href='/join'>
                <span>Join us </span>
              </a>
            </menu>
            <a href='/register'>Register</a>
          </div>
        </Container>
        <Fill />
      </>
    );
  }
}

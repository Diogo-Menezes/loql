import React, { Component } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';
import logo from '../../assets/logo-dark.png';

export default class header extends Component {
  render() {
    return (
      <Container>
        <FiMenu/>
        <img src={logo} alt='logo' />
      </Container>
    );
  }
}

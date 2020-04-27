import React from 'react';

import { Container, Call, Image, Main } from './styles';

import landingImage from '../../assets/home-illustration.png';

const Landing = () => {
  return (
    <Container>
      <Image>
        <img src={landingImage} alt='Loql' cover center />
      </Image>
      <Main>
        <div>
          <h1>A decent bite for the whole community</h1>
          <p>
            Loql connects hungry local people with local businesses who want to
            get great food to them
          </p>
        </div>

        <Call>
          <h1>Sell food to locals</h1>
          <p>
            Register your business today with no charges for the first 30 days{' '}
          </p>
          <button>Register</button>
        </Call>
      </Main>
      <div>
        <h2>Why Locl?</h2>
      </div>
      <div>
        <ul>
          <li>
            <img src='' alt='' />
            <h4>We're on side</h4>
            <p>
              Unlike most food delivery platforms, we don’t charge high fees, or
              hold businesses to unreasonable{' '}
              <a href='/termsandconditions'>terms & conditions.</a>
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Landing;

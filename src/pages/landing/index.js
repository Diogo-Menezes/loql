import React from 'react';

import { Container, Call, Image, Main, About } from './styles';

import landingImage from '../../assets/home-illustration.png';
import placeholder from '../../assets/placeholder.png';

const Landing = () => {
  return (
    <Container>
      <Image>
        <img src={landingImage} alt='Loql' cover center />
        <section>
          <h1>A decent bite for the whole community</h1>
          <p>
            Loql connects hungry local people with local businesses who want to
            get great food to them
          </p>
        </section>
      </Image>
      <Main>
        <Call>
          <h1>Sell food to locals</h1>
          <p>
            Register your business today with no charges for the first 30 days{' '}
          </p>
          <a href='/register'>Register</a>
        </Call>

        <About>
          <div>
            <h2>Why Locl?</h2>
          </div>
          <section>
            <ul>
              <li>
                <img src={placeholder} alt='' />
                <h4>We're on side</h4>
                <p>
                  Unlike most food delivery platforms, we don’t charge high
                  fees, or hold businesses to unreasonable &nbsp;
                  <a id='terms' href='/terms'>
                    terms &amp; conditions.
                  </a>
                </p>
              </li>
              <li>
                <img src={placeholder} alt='' />
                <h4>We’re transparent</h4>
                <p>
                  We’re open, transparent and obsessed with creating value for
                  businesses and communities.
                </p>
              </li>

              <li>
                <img src={placeholder} alt='' />
                <h4>We’re a community too</h4>
                <p>
                  Loql is a team of volunteers doing all this because we think
                  it’s the right thing to do.
                </p>
              </li>
            </ul>
          </section>
          <div id='more'>
            <a id='about' href='/about'>
              More about us
            </a>
          </div>
        </About>
      </Main>
    </Container>
  );
};

export default Landing;

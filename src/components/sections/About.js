import React from 'react';
import styled from 'styled-components';

import ImpressionLottie from '../lottieAnims/ImpressionLottie';
import TrustLottie from '../lottieAnims/TrustLottie';
import GrowLottie from '../lottieAnims/GrowLottie';

import { Section, Container } from '@components/global';

function About(){
    return(
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>First impressions matter.</h2>
              <p>
                Every experience with your brand leaves a mark, especially the 
                first one. Many times, the first interaction with a brand happens online. So,
                make that first impression memorable with a great website.
              </p>
            </div>
            <Art>
              <ImpressionLottie />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <TrustLottie />
            </Art>            
            <div>
              <h2>Build trust for your brand.</h2>
              <p>
                Leave a lasting impression by having the quality of your brand extend online. Enable
                customers to interact with you online to build a relationship; and a community.

              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Grow and expand.</h2>
              <p>
                Help your business flourish by reaching out to more people than ever before
                with analytics that produce data that matter and float to the top of searches
                with our SEO strategy.
              </p>
            </div>
            <Art>
              <GrowLottie />
            </Art>
          </Grid>
        </Container>
      </Section>
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;

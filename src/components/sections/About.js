import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import ImpressionLottie from '../lottieAnims/ImpressionLottie';
import TrustLottie from '../lottieAnims/TrustLottie';
import GrowLottie from '../lottieAnims/GrowLottie';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>First impressions matter.</h2>
              <p>
                When people log onto your page, they see 
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
                Having a website that relays the nature and quality of 
                your brand is essential to 
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Grow and expand.</h2>
              <p>
                Help your business flourish by reaching out to more people than before and,
                more importantly, helping them stick. After all, 
              </p>
            </div>
            <Art>
              <GrowLottie />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

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

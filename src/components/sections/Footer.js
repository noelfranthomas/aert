import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/noelfranthomas',
  }
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div style={{display: "flex", flexFlow:"row wrap", justifyContent: "center", alignItems: "center"}}>
          <Art>
            <Img
              fluid={data.art_pot.childImageSharp.fluid}
              style={{ width: 300, maxWidth: '100%', marginBottom: -16 }}
            />
          </Art>
          <div style={{margin: "24px"}}>
            <h3>
              Contact us at
            </h3>
            <h3>
              noelfranthomas@gmail.com
            </h3>
          </div>
          
        </div>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>aert</h2>
              <span>
                Illustrations by
                {` `}
                <ExternalLink href="http://absurd.design/">
                  absurd.design
                </ExternalLink>
                ,
                {` `}
                <ExternalLink href="https://lottiefiles.com/pzlnvigbj5">
                  Guillaume Will
                </ExternalLink>
                {` `}
                and
                {` `}
                <ExternalLink href="https://lottiefiles.com/user/466704">
                  Caique Gomes
                </ExternalLink>
              </span>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;

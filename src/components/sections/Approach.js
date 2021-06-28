import React from 'react';

import { ReactComponent as NumberDiagram } from '@images/diagrams/onetwothree.svg';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const STEPS = [
  {
    title: '1 - Design',
    content: () => (
      <>
        The team at Argo is well-versed in creating fast, responsive, and lightweight
        websites in a timely manner. This allows local businesses to accomodate for 
        as many users as soon as possible. At the same time, Argo offers competitive
        pricing and customer support.
      </>
    ),
  },
  {
    title: '2 - Build',
    content: () => (
      <>
        A website is the easiest way for customers to find, discover, and share about
        a business. A speedy and responsive website could be the next step to growth,
        outreach, and retention.
      </>
    ),
  },
  {
    title: '3 - Deploeveve',
    content: () => (
      <>
        Argo's team is dedicated to our clients. However, the time it takes to design, 
        code, and deploy each site may vary. Contact us to find out how we can help!
      </>
    ),
  },
];

function Approach(){
    return(
      <Section id="approach" accent="secondary">
        <Container>
        <h2 style={{margin: "0 0 40px 0.5em"}}>Our Approach:</h2>
            <div style={{textAlign: "center", display: "flex", alignContent: "center", flexFlow: "column wrap"}}>
              <NumberDiagram />
              <br />
              <br />
              <h3>Simple. Fast. Brilliant.</h3>
            </div>
        <div>
          {STEPS.map(({ title, content }) => (
            <FaqItem title={title} key={title}>
              {content()}
            </FaqItem>
          ))}
        </div>
        </Container>
      </Section>
    )
}

export default Approach;

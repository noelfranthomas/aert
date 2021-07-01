import React from 'react';

import { Section, Container } from '@components/global';
import Card from '@components/elements/Card.js';

function Approach(){
    return(
      <Section id="approach" accent="secondary">
        <Container>
        <h2 style={{margin: "0 0 40px 0.5em"}}>Our Approach:</h2>
            <div style={{textAlign: "center", display: "flex", alignContent: "center", flexFlow: "column wrap"}}>
            <h3>Simple. Fast. Brilliant.</h3>
            <br />
            <br />
            </div>
            <div style={{display: "flex", justifyContent: "space-around", flexFlow: "row wrap"}}>
              <Card number="1"
              color="lightblue"
              title="Plan"
              desc="Togther we create a distinctive user experience to convey what your brand is really about."
              />
               <Card number="2"
              color="blue"
              title="Build"
              desc="Our team puts together the code, performs analytics, and optimizes the SEO strategy."
              />
               <Card number="3"
              color="darkblue"
              title="Launch"
              desc="Customers can now view a blazing fast website (that looks good too)."
              />
            </div>
        </Container>
      </Section>
    )
}

export default Approach;

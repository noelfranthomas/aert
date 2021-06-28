import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Approach from '@sections/Approach';
import Projects from '@sections/Projects';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Approach />
    <Projects />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
